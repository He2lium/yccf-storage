import {FormatEnum} from "sharp";

export interface SharpOptionsType{
    Key: string,
    resize?:{
        width?: number,
        height?: number
    }
    to: keyof FormatEnum
}