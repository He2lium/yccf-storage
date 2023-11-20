import {S3ClientConfigType} from "@aws-sdk/client-s3";

export interface YcfStorageS3optionsType {
    clientConfig?: S3ClientConfigType,
    Bucket?: string
}