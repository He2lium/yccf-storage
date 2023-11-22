import {
    ActionDataType

} from "../types/action-data.type";
import {DeleteS3Service} from "./internal/s3/delete.s3-service";
import {MoveS3Service} from "./internal/s3/move.s3-service";
import {getByUrlService} from "./internal/get-by-url.service";
import {PutS3Service} from "./internal/s3/put.s3-service";
import {getMimeService} from "./internal/get-mime.service";
import {GetS3Service} from "./internal/s3/get.s3-service";
import {handleImagesService} from "./internal/handle-images.service";
import axios, {AxiosError} from "axios";
import {YcfStorageCallbackType} from "../types/ycf-storage-callback.type";
import {CallbackError} from "./internal/error.service";
import {YcfStorageActionEnum} from "../types/ycf-storage-action.enum";
import {YcfStorageAnyActionType} from "../types/ycf-storage-any-action.type";
import {ListS3Service} from "./internal/s3/list.s3-service";

export const YcfStorageActionHandlerService = async (actions: YcfStorageAnyActionType[], callbackData?: YcfStorageCallbackType) => {
    for (let actionHandle of actions) {

        const {
            action,
            imageOptions,
            axiosOptions,
            destinationKey,
            sourceKeys,
            sourceKey,
            sourceUrl,
            prefix
        } = actionHandle as ActionDataType

        switch (action) {

            case YcfStorageActionEnum.delete:
                await DeleteS3Service(sourceKeys)
                break;

            case YcfStorageActionEnum.deleteByPrefix:
                await DeleteS3Service(await ListS3Service(prefix))
                break;

            case YcfStorageActionEnum.move:
                await MoveS3Service(sourceKey, destinationKey)
                break;

            case YcfStorageActionEnum.download:
                await PutS3Service(
                    destinationKey,
                    await getByUrlService(sourceUrl, axiosOptions),
                    getMimeService(destinationKey)
                )
                break;

            case YcfStorageActionEnum.downloadImageAndHandle:
                const buf = await getByUrlService(sourceUrl, axiosOptions)
                if (destinationKey)
                    await PutS3Service(destinationKey, buf, getMimeService(destinationKey))
                await handleImagesService(
                    buf,
                    imageOptions
                )
                break;

            case YcfStorageActionEnum.justHandleImage:
                await handleImagesService(
                    await GetS3Service(sourceKey),
                    imageOptions,
                )
                break;

            case YcfStorageActionEnum.moveImageAndHandle:
                if (destinationKey)
                    await MoveS3Service(sourceKey, destinationKey)
                await handleImagesService(
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