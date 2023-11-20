import {PutS3Service} from "./s3/put.s3-service";
import {SharpService} from "./sharp.service";
import {getMimeService} from "./get-mime.service";
import {YcfStorageImageOptionsType} from "../../types/ycf-storage-image-options.type";

export const handleImagesService = async (buf: Buffer, imageOptions: YcfStorageImageOptionsType[])=>{
    for (let imageOption of imageOptions){
        const {Key} = imageOption
        await PutS3Service(
            Key,
            await SharpService(buf, imageOption),
            getMimeService(Key)
        )
    }
}