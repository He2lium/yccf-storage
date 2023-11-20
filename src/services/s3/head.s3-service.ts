import {HeadObjectCommand} from "@aws-sdk/client-s3";
import {S3InstanceWithBucket} from "../../types/handler.type";

export const HeadS3Service = async (Key: string, {S3ClientInstance, Bucket}: S3InstanceWithBucket) =>
    S3ClientInstance.send(new HeadObjectCommand({
        Bucket,
        Key,
    }))