const { S3Client } = require("@aws-sdk/client-s3");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const s3Client = new S3Client({
  region: "null", // Tùy theo region default null
  credentials: {
    accessKeyId: "example_access_key",
    secretAccessKey: "example_secret_access_key",
  },
  endpoint: "https://s3.xorcloud.net",
});

//================================================================== Upload file ==================================================================
const bucketName = "example_bucket_name";
const objectKey = "example_object_key";
const acl = "public-read"; // "private", "public-read", "public-read-write", "authenticated-read", "aws-exec-read", và "bucket-owner-read"

const fileStream = fs.createReadStream("/path/to/file");

const uploadParams = {
  Bucket: bucketName, // Required
  Key: objectKey, // Required
  Body: fileStream, // Required
  ACL: acl, // Not required
};

s3Client
  .send(new PutObjectCommand(uploadParams))
  .then(() => {
    console.log(`File uploaded successfully to ${bucketName}/${objectKey}`);
  })
  .catch((err) => {
    console.error("Error uploading file:", err);
  });
//====================================================================================================================================================