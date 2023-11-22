import {YcfStorageImageOptionsType} from "./ycf-storage-image-options.type";
import {AxiosRequestConfig} from "axios";
import {YcfStorageActionEnum} from "./ycf-storage-action.enum";

export interface ActionDataType {
    action: YcfStorageActionEnum
    sourceUrl: string,
    sourceKey: string, // URL | S3Key
    sourceKeys: string[]
    prefix: string,
    destinationKey: string // To move
    imageOptions: YcfStorageImageOptionsType[]
    axiosOptions?: AxiosRequestConfig
}
