import {YcfStorageImageOptionsType} from "../../types/ycf-storage-image-options.type";
import sharp, {gravity} from "sharp";
import {getByUrlService} from "./get-by-url.service";


export const SharpService = async (buffer: Buffer, options: YcfStorageImageOptionsType) => {
    const source = sharp(buffer)
    if (options.resize) {
        const {width, height, fit} = options.resize
        if (width && height) source.resize(width, height)
        else if (width) source.resize(width, null, {fit})
        else if (height) source.resize(null, height, {fit})
    }
    if(options.watermarkUrl){
        const buffer = await getByUrlService(options.watermarkUrl)
        source.composite([{input: buffer, blend: "over", gravity: gravity.centre}])
    }

    source.toFormat(options.to,options.toOptions)
    return source.toBuffer()
}