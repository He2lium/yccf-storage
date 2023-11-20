import {FitEnum, FormatEnum} from "sharp";

export interface YcfStorageImageOptionsType {
    Key: string,
    resize?:{
        width?: number,
        height?: number,
        fit?: keyof FitEnum
    }
    to: keyof FormatEnum
}