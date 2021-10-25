'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.accountsAccount_idTransactionsGET = function accountsAccount_idTransactionsGET (req, res, next, account_id, page, page_size, sort, sort_field) {
  Transactions.accountsAccount_idTransactionsGET(account_id, page, page_size, sort, sort_field)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccount_idTransactionsPOST = function accountsAccount_idTransactionsPOST (req, res, next, body, account_id, xRequest_Id) {
  Transactions.accountsAccount_idTransactionsPOST(body, account_id, xRequest_Id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
