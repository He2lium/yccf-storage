import {AxiosError} from "axios";
import {CallbackType} from "../types/callback.type";

const LogError = (err: {message: string, [key: string]: any})=>{
    console.error({
        level: 'error',
        ...err
    })
}

export const CallbackError = (e: AxiosError, callbackData: CallbackType)=>{
    LogError({
        message: 'Storage Cloud Function callback error',
        axios: {
            message: e.message,
            status: e.status,
            responseData: e.response?.data
        },
        callbackData
    })
}

export const QueueMessageError = ({message, stack, name}: Error, jobJSON: string) => {
    LogError({
        message: `Storage Cloud Function handler error - ${message}`,
        stack,
        name,
        jobJSON
    })
}