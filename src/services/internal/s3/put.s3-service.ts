import {PutObjectCommand} from "@aws-sdk/client-s3";
import {globalRefS3Service} from "../global-ref-s3.service";

export const PutS3Service =
    async (Key: string, Body: string | Buffer, ContentType?: string) => {
        const {Bucket, S3ClientInstance} = globalRefS3Service.get()
        return S3ClientInstance.send(new PutObjectCommand({
            Bucket,
            Key,
            Body,
            ContentType,
        }))
    }
