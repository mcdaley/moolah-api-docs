'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.accountsAccount_idGET = function accountsAccount_idGET (req, res, next, account_id) {
  Accounts.accountsAccount_idGET(account_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccount_idPUT = function accountsAccount_idPUT (req, res, next, body, account_id, xRequest_Id) {
  Accounts.accountsAccount_idPUT(body, account_id, xRequest_Id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsGET = function accountsGET (req, res, next, xUserId, page, page_size, sort, sort_field) {
  Accounts.accountsGET(xUserId, page, page_size, sort, sort_field)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsPOST = function accountsPOST (req, res, next, body, xRequest_Id) {
  Accounts.accountsPOST(body, xRequest_Id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
