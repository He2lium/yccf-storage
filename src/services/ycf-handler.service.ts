import {Handler} from "@yandex-cloud/function-types";
import {HandleService} from "./handle.service";
import {HandlerActionType} from "../types/handler.type";
import {QueueMessageError} from "./error.service";
import {GlobalRefS3Service} from "./global-ref-s3.service";

export const YcfHandlerService: Handler.MessageQueue = async (event, _context) => {
    for (let message of event.messages) {
        try {

            const {
                callback,
                handlers,
                s3options
            } = JSON.parse(message.details.message.body) as HandlerActionType

            GlobalRefS3Service.set(s3options)

            await HandleService(handlers, callback)

        } catch (e) {
            QueueMessageError(e as Error, message.details.message.body)
        }
    }
}