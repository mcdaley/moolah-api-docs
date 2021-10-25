'use strict';


/**
 * Returns a bank account
 * Return the account details for a single user's bank account.
 *
 * account_id UUID 
 * returns AccountDetails
 **/
exports.accountsAccount_idGET = function(account_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "account" : {
    "account_number" : "account_number",
    "account_type" : "Checking",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "routing_number" : "routing_number",
    "available_balance" : 0.8008281904610115,
    "posted_balance" : 6.027456183070403,
    "updated_at" : "2000-01-23T04:56:07.000+00:00",
    "user_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "name" : "My Checking Account",
    "nickname" : "Moolah",
    "currency" : "USD",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "opening_date" : "2000-01-23",
    "status" : "Active"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit a bank account
 * Edit certain fields of the bank account
 *
 * body AccountUpdateParams 
 * account_id UUID 
 * xRequest_Id UUID Unique client provided ID for the API request
 * returns Account
 **/
exports.accountsAccount_idPUT = function(body,account_id,xRequest_Id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "account_number" : "account_number",
  "account_type" : "Checking",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "routing_number" : "routing_number",
  "available_balance" : 0.8008281904610115,
  "posted_balance" : 6.027456183070403,
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "user_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name" : "My Checking Account",
  "nickname" : "Moolah",
  "currency" : "USD",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "opening_date" : "2000-01-23",
  "status" : "Active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return list of accounts
 * Returns a list of all a users checking and savings accounts.
 *
 * xUserId UUID User ID token
 * page BigDecimal The page of results to return, default is the first page (optional)
 * page_size BigDecimal The number of results to return for the page. The default page size is 25 and the max is 50 (optional)
 * sort String Sort results in ascending or descending order (optional)
 * sort_field String Account attribute used to sort the accounts. The default sort field is the account type. (optional)
 * returns AccountList
 **/
exports.accountsGET = function(xUserId,page,page_size,sort,sort_field) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accounts" : [ {
    "account_number" : "account_number",
    "account_type" : "Checking",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "routing_number" : "routing_number",
    "available_balance" : 0.8008281904610115,
    "posted_balance" : 6.027456183070403,
    "updated_at" : "2000-01-23T04:56:07.000+00:00",
    "user_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "name" : "My Checking Account",
    "nickname" : "Moolah",
    "currency" : "USD",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "opening_date" : "2000-01-23",
    "status" : "Active"
  }, {
    "account_number" : "account_number",
    "account_type" : "Checking",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "routing_number" : "routing_number",
    "available_balance" : 0.8008281904610115,
    "posted_balance" : 6.027456183070403,
    "updated_at" : "2000-01-23T04:56:07.000+00:00",
    "user_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "name" : "My Checking Account",
    "nickname" : "Moolah",
    "currency" : "USD",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "opening_date" : "2000-01-23",
    "status" : "Active"
  } ],
  "totalCount" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a bank account
 * Creates a checking or savings account for a registered user and sets the opening balance to $0.
 *
 * body AccountCreateParams 
 * xRequest_Id UUID Unique client provided ID for the API request
 * returns AccountDetails
 **/
exports.accountsPOST = function(body,xRequest_Id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "account" : {
    "account_number" : "account_number",
    "account_type" : "Checking",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "routing_number" : "routing_number",
    "available_balance" : 0.8008281904610115,
    "posted_balance" : 6.027456183070403,
    "updated_at" : "2000-01-23T04:56:07.000+00:00",
    "user_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "name" : "My Checking Account",
    "nickname" : "Moolah",
    "currency" : "USD",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "opening_date" : "2000-01-23",
    "status" : "Active"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

