import {Handler} from "@yandex-cloud/function-types";
import {HandleService} from "./handle.service";
import {HandlerActionType} from "../types/handler.type";
import {QueueMessageError} from "./error.service";

export const YcfHandlerService: Handler.MessageQueue = async (event, _context) => {
    for (let message of event.messages) {
        try {
            const {callback, handlers} = JSON.parse(message.details.message.body) as HandlerActionType
            await HandleService(handlers, callback)
        } catch (e) {
            QueueMessageError(e as Error,message.details.message.body)
        }
    }
}