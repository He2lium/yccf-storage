import {ActionDataType} from "./action-data.type";
import {
    YcfStorageActionImageType,
    YcfStorageActionDownloadType,
    YcfStorageActionMoveType,
    YcfStorageActionDownloadImageWithHandlingType,
    YcfStorageActionMoveImageWithHandlingType,
    YcfStorageActionDeleteType, YcfStorageActionDeleteByPrefixType
} from "./ycf-storage-actions.type";

export type YcfStorageAnyActionType =
    ActionDataType
    | YcfStorageActionImageType
    | YcfStorageActionDownloadType
    | YcfStorageActionMoveType
    | YcfStorageActionDownloadImageWithHandlingType
    | YcfStorageActionMoveImageWithHandlingType
    | YcfStorageActionDeleteType
    | YcfStorageActionDeleteByPrefixType