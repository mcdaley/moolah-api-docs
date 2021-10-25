'use strict';


/**
 * Remove a block on an account
 * Cancels an active block on an account and updates the account status to active from blocked. When a block is cancelled it creates a new account block with the status of Cancelled.
 *
 * account_id UUID 
 * block_id UUID 
 * xRequest_Id UUID Unique client provided ID for the API request
 * no response value expected for this operation
 **/
exports.accountsAccount_idBlocksBlock_idDELETE = function(account_id,block_id,xRequest_Id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Return list of account blocks
 * Returns all of the account blocks ever assigned to an account sorted by descending created at date.
 *
 * account_id UUID 
 * page BigDecimal The page of results to return, default is the first page (optional)
 * page_size BigDecimal The number of results to return for the page. The default page size is 25 and the max is 50 (optional)
 * returns BlockList
 **/
exports.accountsAccount_idBlocksGET = function(account_id,page,page_size) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total_count" : 0.8008281904610115,
  "blocks" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a block to a bank account
 * Add a block to a checking or savings account when there  is suspected fraud on the account. Adding a block also updates the status of the account to blocked.
 *
 * body BlockParams 
 * account_id UUID 
 * xRequest_Id UUID Unique client provided ID for the API request
 * returns BlockDetails
 **/
exports.accountsAccount_idBlocksPOST = function(body,account_id,xRequest_Id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "block" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

