import {CopyObjectCommand} from "@aws-sdk/client-s3";
import {GlobalRefS3Service} from "../global-ref-s3.service";
export const CopyS3Service = async (sourceKey: string, destinationKey: string)=>{
    const {Bucket, S3ClientInstance} = GlobalRefS3Service.get()
    await S3ClientInstance.send(new CopyObjectCommand({
        CopySource: `${Bucket}/${sourceKey}`,
        Bucket,
        Key: destinationKey,
    }))
}