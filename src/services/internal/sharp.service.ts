import { YcfStorageImageOptionsType } from "../../types/ycf-storage-image-options.type";
import sharp from "sharp";

export const SharpService = async (
  buffer: Buffer,
  options: YcfStorageImageOptionsType,
) => {
  const source = sharp(buffer);
  if (options.resize) {
    const { width, height, fit, background } = options.resize;
    if (width && height) source.resize(width, height, { fit, background });
    else if (width) source.resize(width, null, { fit, background });
    else if (height) source.resize(null, height, { fit, background });
  }

  source.toFormat(options.to, options.toOptions);
  return source.toBuffer();
};
