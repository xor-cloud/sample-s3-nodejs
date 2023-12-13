const { S3Client } = require("@aws-sdk/client-s3");
const { GetBucketPolicyCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region: "null", // Tùy theo region default null
    credentials: {
      accessKeyId: "example_access_key",
      secretAccessKey: "example_secret_access_key",
    },
    endpoint: "https://s3.xorcloud.net",
  });
  
//================================================================== Get Policy Bucket ==================================================================
const getBucketPolicyParams = {
    Bucket: "example_bucket_name",
  };
  
  // Call the GetBucketPolicyCommand to get the bucket policy
  s3Client
    .send(new GetBucketPolicyCommand(getBucketPolicyParams))
    .then((data) => {
      console.log("Bucket Policy:", data.Policy);
    })
    .catch((err) => {
      console.error("Error getting bucket policy:", err);
    });
  //====================================================================================================================================================