const { S3Client } = require("@aws-sdk/client-s3");
const { CreateBucketCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region: "null", // Tùy theo region default null
    credentials: {
      accessKeyId: "example_access_key",
      secretAccessKey: "example_secret_access_key",
    },
    endpoint: "https://s3.xorcloud.net",
  });

//================================================================== Create Bucket ==================================================================
const bucketName = "example_bucket_name";
const acl = "public-read"; // "private", "public-read", "public-read-write", "authenticated-read", "aws-exec-read", và "bucket-owner-read"
const createBucketParams = {
  Bucket: bucketName,
  ACL: acl 
};

s3Client.send(new CreateBucketCommand(createBucketParams))
  .then(() => {
    console.log(`Bucket "${bucketName}" created successfully.`);
  })
  .catch((err) => {
    console.error('Error creating bucket:', err);
  });
//====================================================================================================================================================