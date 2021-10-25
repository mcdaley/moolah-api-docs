'use strict';


/**
 * Get list of transactions for an account
 * Fetch a list of transactions for an account by default the transactions will be sorted by descending date order with a limit of 25 transactions returned.
 *
 * account_id UUID 
 * page BigDecimal The page of results to return, default is the first page (optional)
 * page_size BigDecimal The number of results to return for the page. The default page size is 25 and the max is 50 (optional)
 * sort String Sort results in ascending or descending order (optional)
 * sort_field String Field to sort transactions, default is date in descending order. (optional)
 * returns TransactionList
 **/
exports.accountsAccount_idTransactionsGET = function(account_id,page,page_size,sort,sort_field) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total_count" : 1,
  "transactions" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new transaction
 * Creates a new transaction to an account and updates the account's posted and available balances.
 *
 * body TransactionParams  (optional)
 * account_id UUID 
 * xRequest_Id UUID Unique client provided ID for the API request
 * returns TransactionDetails
 **/
exports.accountsAccount_idTransactionsPOST = function(body,account_id,xRequest_Id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transaction" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

