require('dotenv').config();

const config = {
    sqs:{
        region: "us-east-1",
        accountId: process.env.AWS_ACCOUNT_ID,
        personalizationQueue: "personalizations"
    }
}

module.exports = config;