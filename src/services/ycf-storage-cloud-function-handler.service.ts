import {Handler} from "@yandex-cloud/function-types";
import {YcfStorageActionHandlerService} from "./ycf-storage-action-handler.service";
import {QueueMessageError} from "./internal/error.service";
import {globalRefS3Service} from "./internal/global-ref-s3.service";
import {YcfStorageMqType} from "../types/ycf-storage-mq.type";

export const YcfStorageCloudFunctionHandlerService: Handler.MessageQueue = async (event, _context) => {
    for (let message of event.messages) {
        try {
            const {
                callback,
                handlers,
                s3options
            } = JSON.parse(message.details.message.body) as YcfStorageMqType

            globalRefS3Service.set(s3options)

            await YcfStorageActionHandlerService(handlers, callback)

        } catch (e) {
            QueueMessageError(e as Error, message.details.message.body)
        }
    }
}