'use strict';

const dynamoDBClient = require('./dynamoDBClient');

// You can use console.log for debugging purposes.

function queryUserNotes(userEmail) {
  // Use the following date format for "now"
  const dateNow = new Date().toISOString();

  var params = {
    TableName: 'user-notes',
    /* ... */
  };

  return new Promise((resolve, reject) => {
    // Query the DynamoDB database...
  });
}

function statusResponse(statusCode) {
  return {
    statusCode,
  };
}

function getAuthenticatedUserEmail(token) {
  var params = {
    TableName: 'token-email-lookup',
    /* ... */
  };

  return new Promise((resolve, reject) => {
    dynamoDBClient.get(params, function (err, data) {
      if (err) reject(err);
      else {
        // Validate the given token with one from the database
        // and return user email if the tokens match ...
      }
    });
  });
}

async function authenticateUser(headers) {
  const authenticationHeader = headers['Authentication'];

  // Validate the Authentication header

  const userEmail = await getAuthenticatedUserEmail(token);

  return userEmail;
}

module.exports.handler = (event, context, callback) => {
  const { headers } = event;

  authenticateUser(headers)
    .then(queryUserNotes)
    .then((notes) => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        },
        body: JSON.stringify(notes),
      };
      callback(null, response);
    })
    .catch((err) => {
      callback(null, err);
    });
};

// Don't modify following exports, tests break without them.
module.exports.getAuthenticatedUserEmail = getAuthenticatedUserEmail;
