import {YcfStorageActionEnum} from "./ycf-storage-action.enum";
import {ActionDataType} from "./action-data.type";

export interface YcfStorageActionDeleteType extends Omit<ActionDataType, "prefix" | "sourceUrl" | "destinationKey" | "imageOptions" | "axiosOptions" | "sourceKey"> {
    action: YcfStorageActionEnum.delete
}

export interface YcfStorageActionDeleteByPrefixType extends Omit<ActionDataType, "prefix" | "sourceUrl" | "destinationKey" | "imageOptions" | "axiosOptions" | "sourceKey"> {
    action: YcfStorageActionEnum.deleteByPrefix
    prefix: string
}

export interface YcfStorageActionMoveType extends Omit<ActionDataType, "prefix" | "sourceUrl" | "imageOptions" | "axiosOptions" | "sourceKeys"> {
    action: YcfStorageActionEnum.move
}

export interface YcfStorageActionMoveImageWithHandlingType extends Omit<ActionDataType, "prefix" | "destinationKey" | "sourceUrl" | "axiosOptions" | "sourceKeys"> {
    action: YcfStorageActionEnum.moveImageAndHandle,
    destinationKey?: string
}

export interface YcfStorageActionDownloadType extends Omit<ActionDataType, "prefix" | "imageOptions" | "sourceKey" | "sourceKeys"> {
    action: YcfStorageActionEnum.download
}

export interface YcfStorageActionDownloadImageWithHandlingType extends Omit<ActionDataType, "prefix" | "destinationKey" | "sourceKey" | "sourceKeys"> {
    action: YcfStorageActionEnum.downloadImageAndHandle,
    destinationKey?: string
}

export interface YcfStorageActionImageType extends Omit<ActionDataType, "prefix" | "sourceUrl" | "destinationKey" | "axiosOptions" | "sourceKeys"> {
    action: YcfStorageActionEnum.justHandleImage
}