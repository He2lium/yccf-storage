import axios, {AxiosRequestConfig} from "axios";

export const getByUrlService = async (url:string, axiosConfig?: AxiosRequestConfig)=>{
    const response = await axios({ ...axiosConfig, url, responseType: 'arraybuffer' })
    const arrayBuffer: ArrayBuffer = response.data
    return Buffer.from(new Uint8Array(arrayBuffer))
}