import {S3Client} from "@aws-sdk/client-s3";

export interface S3InstanceWithBucket{
    Bucket: string,
    S3ClientInstance: S3Client
}