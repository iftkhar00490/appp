"use strict";

// eslint-disable-next-line no-mixed-requires
var _require = require("./mock"),
  mocks = _require.mocks,
  addMockImage = _require.addMockImage;

var url = require("url");

var functions = require("firebase-functions");

module.exports.placesRequest = function (request, response, client) {
  var _url$parse$query = url.parse(request.url, true).query,
    location = _url$parse$query.location,
    mock = _url$parse$query.mock;

  if (mock === "true") {
    var data = mocks[location];

    if (data) {
      data.results = data.results.map(addMockImage);
    }

    return response.json(data);
  }

  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then(function (res) {
      res.data.results = res.data.results.map(addMockImage);
      return response.json(res.data);
    })
    .catch(function (e) {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
//# sourceMappingURL=index.dev.js.map
