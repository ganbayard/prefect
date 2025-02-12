# Build the Python distributable
FROM python:3.9-slim AS python-builder

WORKDIR /opt/prefect

# Install git for version calculation
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the repository for version calculation
COPY . .

# Copy uv from official image - pin to specific version for build caching
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv


# Create source distribution
RUN uv build --sdist --wheel --out-dir dist && \
    mv "dist/prefect-"*".tar.gz" "dist/prefect.tar.gz"

# Final image
FROM python:3.9-slim
COPY --from=python-builder /bin/uv /bin/uv

# Accept SQLite version as build argument
ARG SQLITE_VERSION="3310100"
ARG SQLITE_YEAR="2020"

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    wget

# Download and compile SQLite
RUN wget https://www.sqlite.org/${SQLITE_YEAR}/sqlite-autoconf-${SQLITE_VERSION}.tar.gz \
    && tar xvfz sqlite-autoconf-${SQLITE_VERSION}.tar.gz \
    && cd sqlite-autoconf-${SQLITE_VERSION} \
    && ./configure \
    && make \
    && make install \
    && ldconfig \
    && cd .. \
    && rm -rf sqlite-autoconf-${SQLITE_VERSION}*

# Install uv for faster pip operations
ENV UV_SYSTEM_PYTHON=1

# Set library path to use our compiled SQLite
ENV LD_LIBRARY_PATH=/usr/local/lib

WORKDIR /app

# Copy the built distributable
COPY --from=python-builder /opt/prefect/dist/prefect.tar.gz ./dist/

# Install requirements and Prefect
COPY pyproject.toml ./
RUN uv pip compile -o requirements.txt pyproject.toml
RUN uv pip install -r requirements.txt
RUN uv pip install ./dist/prefect.tar.gz


