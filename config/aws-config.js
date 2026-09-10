const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-south-1" });

const s3 = new AWS.S3(); //making instance of s3

const S3_BUCKET = "samplejyotibucket";

module.exports = { s3, S3_BUCKET };
