import {CopyS3Service} from "./copy.s3-service";
import {DeleteS3Service} from "./delete.s3-service";

export const MoveS3Service = async (sourceKey: string, destinationKey: string)=>{
    await CopyS3Service(sourceKey, destinationKey)
    await DeleteS3Service([sourceKey])
}