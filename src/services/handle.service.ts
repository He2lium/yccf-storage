import {
    HandlerAction, HandlerActions,
    HandlerType
} from "../types/handler.type";
import {DeleteS3Service} from "./s3/delete.s3-service";
import {MoveS3Service} from "./s3/move.s3-service";
import {GetByUrlService} from "./get-by-url.service";
import {PutS3Service} from "./s3/put.s3-service";
import {GetMimeService} from "./get-mime.service";
import {GetS3Service} from "./s3/get.s3-service";
import {HandleImagesService} from "./handle-images.service";
import {GlobalRefS3Service} from "./global-ref-s3.service";
import axios, {AxiosError} from "axios";
import {CallbackType} from "../types/callback.type";
import {CallbackError} from "./error.service";

export const HandleService = async (actions: HandlerActions[], callbackData?: CallbackType) => {
    for (let actionHandle of actions) {

        const {
            action,
            imageOptions,
            axiosOptions,
            destinationKey,
            sourceKeys,
            sourceKey,
            sourceUrl,
            s3options
        } = actionHandle as HandlerType

        GlobalRefS3Service.set(s3options)

        switch (action) {

            case HandlerAction.delete:
                await DeleteS3Service(sourceKeys)
                break;

            case HandlerAction.move:
                await MoveS3Service(sourceKey, destinationKey)
                break;

            case HandlerAction.download:
                await PutS3Service(
                    destinationKey,
                    await GetByUrlService(sourceUrl, axiosOptions),
                    GetMimeService(destinationKey)
                )
                break;

            case HandlerAction.downloadImageAndHandle:
                const buf = await GetByUrlService(sourceUrl, axiosOptions)
                if (destinationKey)
                    await PutS3Service(destinationKey, buf, GetMimeService(destinationKey))
                await HandleImagesService(
                    buf,
                    imageOptions
                )
                break;

            case HandlerAction.justHandleImage:
                await HandleImagesService(
                    await GetS3Service(sourceKey),
                    imageOptions,
                )
                break;

            case HandlerAction.moveImageAndHandle:
                if (destinationKey)
                    await MoveS3Service(sourceKey, destinationKey)
                await HandleImagesService(
                    await GetS3Service(destinationKey ?? sourceKey),
                    imageOptions
                )
                if (!destinationKey)
                    await DeleteS3Service([sourceKey])
                break;
            default:
                console.error({
                    level: "error",
                    message: `Storage manager failed, incorrect action type`,
                    action
                })
                return;
        }
    }

    if (callbackData) {
        try {
            await axios.post(callbackData.url, callbackData.data, callbackData.config)
        } catch (e) {
            CallbackError(e as AxiosError, callbackData)
        }
    }
}