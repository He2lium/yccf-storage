import {HeadObjectCommand} from "@aws-sdk/client-s3";
import {globalRefS3Service} from "../global-ref-s3.service";

export const HeadS3Service = async (Key: string) =>{
    const {Bucket, S3ClientInstance} = globalRefS3Service.get()
    return S3ClientInstance.send(new HeadObjectCommand({
        Bucket,
        Key,
    }))
}