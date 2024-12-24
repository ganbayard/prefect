from importlib import import_module
from typing import Any, Callable, TypeVar

from pydantic import BaseModel
from pydantic_core import SchemaValidator, core_schema

T = TypeVar("T", bound=BaseModel)

ListValidator = SchemaValidator(
    schema=core_schema.list_schema(
        items_schema=core_schema.dict_schema(
            keys_schema=core_schema.str_schema(), values_schema=core_schema.any_schema()
        )
    )
)


def validate_list(model: type[T], input: Any) -> list[T]:
    return [
        model.model_validate(**item) for item in ListValidator.validate_python(input)
    ]


def ListAdapter(model: type[T]) -> Callable[[Any], list[T]]:
    return lambda input: validate_list(model, input)
