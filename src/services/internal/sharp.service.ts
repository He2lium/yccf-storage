import {YcfStorageImageOptionsType} from "../../types/ycf-storage-image-options.type";
import sharp from "sharp";


export const SharpService = async (buffer: Buffer, options: YcfStorageImageOptionsType) => {
    const source = sharp(buffer)
    if (options.resize) {
        const {width, height, fit} = options.resize
        if (width && height) source.resize(width, height)
        else if (width) source.resize(width, null, {fit})
        else if (height) source.resize(null, height, {fit})
    }
    source.toFormat(options.to)
    return source.toBuffer()
}