import {S3Client, S3ClientConfigType} from "@aws-sdk/client-s3";

export const GetS3Client = (options?: S3ClientConfigType) => new S3Client(options ?? {
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    credentials: {
        accessKeyId: process.env.key as string,
        secretAccessKey: process.env.secret as string,
    },
})
