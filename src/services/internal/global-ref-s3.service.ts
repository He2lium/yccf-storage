import {getS3clientService} from "./get-s3client.service";
import {YcfStorageS3optionsType} from "../../types/ycf-storage-s3options.type";
import {S3InstanceWithBucket} from "../../types/s3-instance-with-bucket.type";

export const globalRefS3Service = {
    set: (s3options?: YcfStorageS3optionsType)=>{
        const GlobalRef:{s3: S3InstanceWithBucket} = global as any;
        GlobalRef.s3 = {
            Bucket: s3options?.Bucket ?? process.env.BUCKET as string,
            S3ClientInstance: getS3clientService(s3options?.clientConfig)
        }
    },
    get: ():S3InstanceWithBucket=>(global as any).s3
}

