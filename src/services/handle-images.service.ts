import {PutS3Service} from "./s3/put.s3-service";
import {SharpService} from "./sharp.service";
import {GetMimeService} from "./get-mime.service";
import {SharpOptionsType} from "../types/sharp-options.type";

export const HandleImagesService = async (buf: Buffer, imageOptions: SharpOptionsType[])=>{
    for (let imageOption of imageOptions){
        const {Key} = imageOption
        await PutS3Service(
            Key,
            await SharpService(buf, imageOption),
            GetMimeService(Key)
        )
    }
}