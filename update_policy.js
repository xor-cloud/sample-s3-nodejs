const { S3Client } = require("@aws-sdk/client-s3");
const { PutBucketPolicyCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region: "null", // Tùy theo region default null
    credentials: {
      accessKeyId: "example_access_key",
      secretAccessKey: "example_secret_access_key",
    },
    endpoint: "https://s3.xorcloud.net",
  });

//================================================================== Update Policy Bucket ==================================================================
const bucketPolicy = {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow", // Allow hoặc Deny Action khai báo ở dưới
        Principal: "*",
        // Allow use
        // Use * for all
        // Use { "AWS": "arn:aws:iam::account_ID:user/username" } for ID
        Action: "s3:GetObject", // s3:GetObject hoặc s3:PutObject
        Resource: ["arn:aws:s3:::example_bucket_name/*"],
      },
    ],
  };
  
  const putBucketPolicyParams = {
    Bucket: "example_bucket_name",
    Policy: JSON.stringify(bucketPolicy),
  };
  
  s3Client
    .send(new PutBucketPolicyCommand(putBucketPolicyParams))
    .then(() => {
      console.log("Bucket policy set successfully.");
    })
    .catch((err) => {
      console.error("Error setting bucket policy:", err);
    });
  //====================================================================================================================================================
  