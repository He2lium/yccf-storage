import {SharpOptionsType} from "../types/sharp-options.type";
import sharp from "sharp";


export const SharpService = async (buffer: Buffer, options: SharpOptionsType)=>{
    const source = sharp(buffer)
    if(options.resize){
        const {width, height} = options.resize
        if(width && height) source.resize(width,height)
        else if(width) source.resize(width,null)
        else if(height) source.resize(null,height)
    }
    source.toFormat(options.to)
    return source.toBuffer()
}