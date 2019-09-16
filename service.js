const config = require("./config");
const AWS = require('aws-sdk'); 
AWS.config.update({region: config.sqs.region});
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

module.exports = class DomainService{
    async createJob(request){
        const params = {
            MessageBody: JSON.stringify(request),
            QueueUrl: `https://sqs.${config.sqs.region}.amazonaws.com/${config.sqs.accountId}/${config.sqs.personalizationQueue}`
            //QueueUrl: "https://sqs.us-east-1.amazonaws.com/456102076320/personalizations"
        }
        return await sqs.sendMessage(params).promise(); 
    }
}