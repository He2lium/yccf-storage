import {
    AvifOptions,
    FitEnum,
    FormatEnum, GifOptions,
    HeifOptions, Jp2Options,
    JpegOptions, JxlOptions,
    OutputOptions,
    PngOptions, TiffOptions,
    WebpOptions
} from "sharp";

export interface YcfStorageImageOptionsType {
    Key: string,
    watermarkUrl?: string
    resize?:{
        width?: number,
        height?: number,
        fit?: keyof FitEnum
    }
    to: keyof FormatEnum
    toOptions?: OutputOptions
        | JpegOptions
        | PngOptions
        | WebpOptions
        | AvifOptions
        | HeifOptions
        | JxlOptions
        | GifOptions
        | Jp2Options
        | TiffOptions
}