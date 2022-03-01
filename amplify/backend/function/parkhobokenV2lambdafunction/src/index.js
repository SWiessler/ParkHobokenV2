/* Amplify Params - DO NOT EDIT
	API_PARKHOBOKEN_GRAPHQLAPIIDOUTPUT
	API_PARKHOBOKEN_USERTABLE_ARN
	API_PARKHOBOKEN_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    
    let date = new Date();

    if (event.request.userAttributes.sub) {

        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'email': {S: event.request.userAttributes.email},
                'departing': {S: false},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.API_{YOUR_APP_NAME}_USERTABLE_NAME
        };

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};