const aws = require('aws')
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
      '__typename': {S: 'User'}
      'username': , 
      'email':,
      'createdAt':,
      'updatedAt':,


    


  },
  TableName: proccess.env.USERTABLE,
}

}