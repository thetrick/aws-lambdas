'use strict';

const AWS = require("aws-sdk");

AWS.config.region = 'us-east-1';

exports.handler = function(event, context, callback){
    
    const sns = new AWS.SNS();
    
    const params = {
        Message: JSON.stringify('Take your meds!!!'),
        Subject: "Reminder: Take Meds",
        TopicArn: process.env.SNS_TOPIC_ARN
      };
  
      sns.publish(params, context.done);
}