'use strict';


/**
 * Subscribe to a webhook
 * Subscribe to receive notifications via webhooks. User provides the callback to receive the webhooks and which notifications they want to receive.
 *
 * body Subscribe_body 
 * returns inline_response_201
 **/
exports.subscribePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subscriberId" : "AAA-123-BBB-456"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unscribe from notifications
 * Unsubscribe from receiving notifications using the subscribe Id returned in the `POST /subscribe` API. 
 *
 * subscriberId String 
 * no response value expected for this operation
 **/
exports.unsubscribeOperation = function(subscriberId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

