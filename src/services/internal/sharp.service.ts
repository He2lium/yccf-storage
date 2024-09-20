import { YcfStorageImageOptionsType } from "../../types/ycf-storage-image-options.type";
import sharp, {gravity} from "sharp";
import {getByUrlService} from "./get-by-url.service";

export const SharpService = async (
  buffer: Buffer,
  options: YcfStorageImageOptionsType,
) => {
  const source = sharp(buffer);
  source.withMetadata({})
  if (options.resize) {
    const { width, height, fit, background } = options.resize;
    if (width && height) source.resize(width, height, { fit, background });
    else if (width) source.resize(width, null, { fit, background });
    else if (height) source.resize(null, height, { fit, background });
  }

  if(options.watermarkUrl){
    const watermarkBuffer = await getByUrlService(options.watermarkUrl)
    source.composite([{input: watermarkBuffer, gravity: gravity.centre, blend: "over"}])
  }

  source.toFormat(options.to, options.toOptions);
  return source.toBuffer();
};
