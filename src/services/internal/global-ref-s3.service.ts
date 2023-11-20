import {S3InstanceWithBucket, S3OptionsType} from "../../types/action-data.type";
import {getS3clientService} from "./get-s3client.service";

export const globalRefS3Service = {
    set: (s3options?: S3OptionsType)=>{
        const GlobalRef:{s3: S3InstanceWithBucket} = global as any;
        GlobalRef.s3 = {
            Bucket: s3options?.Bucket ?? process.env.BUCKET as string,
            S3ClientInstance: getS3clientService(s3options?.clientConfig)
        }
    },
    get: ():S3InstanceWithBucket=>(global as any).s3
}

