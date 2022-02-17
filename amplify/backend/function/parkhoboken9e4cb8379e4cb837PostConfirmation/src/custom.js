const aws = require('aws-sdk')
const ddb = newaws.DynamoDb()

exports.hanlder = async (event, context) => { 
  if (event.request.userAttributes.sub) { 
    console.log("Error: no user was written to DynamoDB")
    context.done(null, event); 
    return; 

  } 

  //save the user to DynamoDB 

  const params = { 
    Item: { 
      'id': {S: event.request.userAttributes.sub} ,
      '__typename': {S: 'User'},
      'username': {S: event.userName}, 
      'email': {S: event.request.userAttributes.email},
      'createdAt': {S: date.toISOString() },
      'updatedAt': {S: date.toISOString() },
    },
    TableName: process.env.USERTABLE,
  }

  try{
    await ddb.putItem(params).promise();
    console.log("Success");
  } catch(e){
    console.log("Error", e);
  }

  context.done(null, event);

}