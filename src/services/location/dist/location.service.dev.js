"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationTransform = exports.locationRequest = void 0;

var _camelize = _interopRequireDefault(require("camelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locationRequest = function locationRequest(searchTerm) {
  return fetch("http://localhost:5001/mealstogo-b2612/us-central1/geocode?city=".concat(searchTerm)).then(function (res) {
    return res.json();
  });
};

exports.locationRequest = locationRequest;

var locationTransform = function locationTransform(result) {
  console.log(result);
  var formattedResponse = (0, _camelize["default"])(result);
  var _formattedResponse$re = formattedResponse.results[0].geometry,
      geometry = _formattedResponse$re === void 0 ? {} : _formattedResponse$re;
  var _geometry$location = geometry.location,
      lat = _geometry$location.lat,
      lng = _geometry$location.lng;
  return {
    lat: lat,
    lng: lng,
    viewport: geometry.viewport
  };
};

exports.locationTransform = locationTransform;
//# sourceMappingURL=location.service.dev.js.map
