/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { ArtifactUpdateData } from "./artifactUpdateData";
import type { ArtifactUpdateDescription } from "./artifactUpdateDescription";
import type { ArtifactUpdateMetadata } from "./artifactUpdateMetadata";

/**
 * Data used by the Prefect REST API to update an artifact.
 */
export interface ArtifactUpdate {
	data?: ArtifactUpdateData;
	description?: ArtifactUpdateDescription;
	metadata_?: ArtifactUpdateMetadata;
}
