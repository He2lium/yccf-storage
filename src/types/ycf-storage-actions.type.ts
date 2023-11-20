import {YcfStorageActionEnum} from "./ycf-storage-action.enum";
import {ActionDataType} from "./action-data.type";

export interface YcfStorageActionDeleteType extends Omit<ActionDataType, "sourceUrl" | "destinationKey" | "imageOptions" | "axiosOptions" | "sourceKey"> {
    action: YcfStorageActionEnum.delete
}

export interface YcfStorageActionMoveType extends Omit<ActionDataType, "sourceUrl" | "imageOptions" | "axiosOptions" | "sourceKeys"> {
    action: YcfStorageActionEnum.move
}

export interface YcfStorageActionMoveImageWithHandlingType extends Omit<ActionDataType, "destinationKey" | "sourceUrl" | "axiosOptions" | "sourceKeys"> {
    action: YcfStorageActionEnum.moveImageAndHandle,
    destinationKey?: string
}

export interface YcfStorageActionDownloadType extends Omit<ActionDataType, "imageOptions" | "sourceKey" | "sourceKeys"> {
    action: YcfStorageActionEnum.download
}

export interface YcfStorageActionDownloadImageWithHandlingType extends Omit<ActionDataType, "destinationKey" | "sourceKey" | "sourceKeys"> {
    action: YcfStorageActionEnum.downloadImageAndHandle,
    destinationKey?: string
}

export interface YcfStorageActionImageType extends Omit<ActionDataType, "sourceUrl" | "destinationKey" | "axiosOptions" | "sourceKeys"> {
    action: YcfStorageActionEnum.justHandleImage
}