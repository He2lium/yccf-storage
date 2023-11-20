import {ListObjectsCommand} from "@aws-sdk/client-s3";
import {globalRefS3Service} from "../global-ref-s3.service";

export const ListS3Service = async (prefix: string) => {
    const {Bucket, S3ClientInstance} = globalRefS3Service.get()
    try {
        const listResponse =
            await S3ClientInstance.send(
                new ListObjectsCommand({
                    Bucket,
                    Prefix: prefix + '/',
                })
            )
        return listResponse.Contents?.map((o) => o.Key)
    } catch (e) {
        return []
    }
}