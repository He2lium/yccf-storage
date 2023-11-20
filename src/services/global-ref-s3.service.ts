import {S3InstanceWithBucket, S3OptionsType} from "../types/handler.type";
import {GetS3Client} from "./s3client.class";

export const GlobalRefS3Service = {
    set: (s3options?: S3OptionsType)=>{
        const GlobalRef:{s3: S3InstanceWithBucket} = global as any;
        GlobalRef.s3 = {
            Bucket: s3options?.Bucket ?? process.env.BUCKET as string,
            S3ClientInstance: GetS3Client(s3options?.clientConfig)
        }
    },
    get: ():S3InstanceWithBucket=>(global as any).s3
}

