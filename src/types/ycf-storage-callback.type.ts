import {AxiosRequestConfig} from "axios";

export interface YcfStorageCallbackType {
    url: string,
    config?: Pick<AxiosRequestConfig, "headers"|"auth">,
    data?: any
}