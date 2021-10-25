'use strict';

var utils = require('../utils/writer.js');
var Notifications = require('../service/NotificationsService');

module.exports.subscribePOST = function subscribePOST (req, res, next, body) {
  Notifications.subscribePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unsubscribeOperation = function unsubscribeOperation (req, res, next, subscriberId) {
  Notifications.unsubscribeOperation(subscriberId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
