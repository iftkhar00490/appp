"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.host = exports.isDevelopment = void 0;
var liveHost = "https://us-central1-photohol-e0497.cloudfunctions.net";
var localHost = "http://localhost:5001/mealstogo-b2612/us-central1";
var isDevelopment = process.env.NODE_ENV === "development";
exports.isDevelopment = isDevelopment;
var host = isDevelopment ? localHost : liveHost;
exports.host = host;
//# sourceMappingURL=env.dev.js.map
