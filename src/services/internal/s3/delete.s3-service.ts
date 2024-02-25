import { DeleteObjectCommand, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { globalRefS3Service } from "../global-ref-s3.service";

export const DeleteS3Service = async (Keys: string[]) => {
  const { Bucket, S3ClientInstance } = globalRefS3Service.get();
  for (const Key of Keys) {
    const command = new DeleteObjectCommand({ Bucket, Key });
    await S3ClientInstance.send(command);
  }
};
