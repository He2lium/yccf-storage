import {GetObjectCommand} from "@aws-sdk/client-s3";
import {GlobalRefS3Service} from "../global-ref-s3.service";

export const GetS3Service = async (Key: string)=>{
    const {Bucket, S3ClientInstance} = GlobalRefS3Service.get()

    const file = await S3ClientInstance.send(new GetObjectCommand({
        Bucket,
        Key
    }))

    const Unit8Array = await file.Body?.transformToByteArray()
    if(!Unit8Array)throw new Error('File data is undefined');

    return Buffer.from(Unit8Array)
}