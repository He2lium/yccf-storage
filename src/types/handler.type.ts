import {SharpOptionsType} from "./sharp-options.type";
import {AxiosRequestConfig} from "axios";
import {S3Client, S3ClientConfigType} from "@aws-sdk/client-s3";

export enum HandlerAction {
    delete = "delete",
    move = "move",
    moveImageAndHandle = "moveImageAndHandle",
    download = "download",
    downloadImageAndHandle = "downloadImageAndHandle",
    justHandleImage = "justHandleImage"
}

export interface S3OptionsType{
    clientConfig?: S3ClientConfigType,
    Bucket?: string
}

export interface S3InstanceWithBucket{
    Bucket: string,
    S3ClientInstance: S3Client
}

export interface HandlerType {
    action: HandlerAction
    sourceUrl: string,
    sourceKey: string, // URL | S3Key
    sourceKeys: string[]
    destinationKey: string // To move
    imageOptions: SharpOptionsType[]
    axiosOptions?: AxiosRequestConfig,
    s3options?: S3OptionsType
}

export interface HandleDeleteActionType extends Omit<HandlerType, "sourceUrl" | "destinationKey" | "imageOptions" | "axiosOptions" | "sourceKey"> {
    action: HandlerAction.delete
}

export interface HandleMoveActionType extends Omit<HandlerType, "sourceUrl" | "imageOptions" | "axiosOptions" | "sourceKeys"> {
    action: HandlerAction.move
}

export interface HandleMoveImageActionType extends Omit<HandlerType, "destinationKey" | "sourceUrl" | "axiosOptions" | "sourceKeys"> {
    action: HandlerAction.moveImageAndHandle,
    destinationKey?: string
}

export interface HandleDownloadActionType extends Omit<HandlerType, "imageOptions" | "sourceKey" | "sourceKeys"> {
    action: HandlerAction.download
}

export interface HandleDownloadImageActionType extends Omit<HandlerType, "destinationKey" | "sourceKey" | "sourceKeys"> {
    action: HandlerAction.downloadImageAndHandle,
    destinationKey?: string
}

export interface HandleImageActionType extends Omit<HandlerType, "sourceUrl" | "destinationKey" | "axiosOptions" | "sourceKeys"> {
    action: HandlerAction.justHandleImage
}

export type HandlerActionType =
    HandlerType
    | HandleDeleteActionType
    | HandleMoveActionType
    | HandleMoveImageActionType
    | HandleDownloadActionType
    | HandleDownloadImageActionType
    | HandleImageActionType