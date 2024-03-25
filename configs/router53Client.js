const { Route53Client } = require("@aws-sdk/client-route-53");

const accessKeyId = "AKIA6OWT7F5NKMR5OT4D";
const secretAccessKey = "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";
const region = "eu-north-1";

const route53Client = new Route53Client({
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
  region: region,
});

// async function checkRoute53Connection() {
//   try {
//     const route53Client = new Route53Client({
//       credentials: {
//         accessKeyId: "YOUR_ACCESS_KEY_ID",
//         secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
//       },
//       region: "eu-north-1",
//     });

//     console.log("Successfully connected to Route53.");
//     console.log(route53Client);
//   } catch (error) {
//     console.error("Error connecting to Route53:", error);
//   }
// }

// checkRoute53Connection();

module.exports = { route53Client };
