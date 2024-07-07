import { YcfStorageAnyActionType } from "./ycf-storage-any-action.type";
import { YcfStorageS3optionsType } from "./ycf-storage-s3options.type";
import { YcfStorageCallbackType } from "./ycf-storage-callback.type";

export interface YcfStorageMqType<ActionType = YcfStorageAnyActionType> {
  handlers: ActionType[];
  s3options?: YcfStorageS3optionsType;
  callback?: YcfStorageCallbackType;
}
