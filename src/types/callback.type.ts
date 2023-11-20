import {AxiosRequestConfig} from "axios";

export interface CallbackType{
    url: string,
    config?: Pick<AxiosRequestConfig, "headers"|"auth">,
    data?: Pick<AxiosRequestConfig, "data">
}