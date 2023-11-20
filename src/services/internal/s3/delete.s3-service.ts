import {DeleteObjectsCommand} from "@aws-sdk/client-s3";
import {globalRefS3Service} from "../global-ref-s3.service";

export const DeleteS3Service = async (Keys: string[]) => {
    const {Bucket, S3ClientInstance} = globalRefS3Service.get()
    if (!Keys.length) return
    const deleteObjectsCommand = new DeleteObjectsCommand({
        Bucket,
        Delete: { Objects: Keys.map((k) => ({ Key: k })) },
    })
    await S3ClientInstance.send(deleteObjectsCommand)
}