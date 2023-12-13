const { S3Client } = require("@aws-sdk/client-s3");
const { ListBucketsCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region: "null", // Tùy theo region default null
    credentials: {
      accessKeyId: "example_access_key",
      secretAccessKey: "example_secret_access_key",
    },
    endpoint: "https://s3.xorcloud.net",
  });

//================================================================== Get All Bucket ==================================================================
const listBucketsParams = {};

s3Client
  .send(new ListBucketsCommand(listBucketsParams))
  .then((data) => {
    console.log(
      "Buckets:",
      data.Buckets.map((bucket) => bucket.Name)
    );
  })
  .catch((err) => {
    console.error("Error listing buckets:", err);
  });
//====================================================================================================================================================
