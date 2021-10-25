'use strict';

var utils = require('../utils/writer.js');
var Blocks = require('../service/BlocksService');

module.exports.accountsAccount_idBlocksBlock_idDELETE = function accountsAccount_idBlocksBlock_idDELETE (req, res, next, account_id, block_id, xRequest_Id) {
  Blocks.accountsAccount_idBlocksBlock_idDELETE(account_id, block_id, xRequest_Id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccount_idBlocksGET = function accountsAccount_idBlocksGET (req, res, next, account_id, page, page_size) {
  Blocks.accountsAccount_idBlocksGET(account_id, page, page_size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccount_idBlocksPOST = function accountsAccount_idBlocksPOST (req, res, next, body, account_id, xRequest_Id) {
  Blocks.accountsAccount_idBlocksPOST(body, account_id, xRequest_Id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
