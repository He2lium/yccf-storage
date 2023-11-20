import {ListObjectsCommand} from "@aws-sdk/client-s3";
import {S3InstanceWithBucket} from "../../types/handler.type";

export const ListS3Service = async (prefix: string, {S3ClientInstance, Bucket}: S3InstanceWithBucket) => {
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