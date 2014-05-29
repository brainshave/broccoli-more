"use strict";

var filter = require("broccoli-dep-filter");
var less = require("less");
var RSVP = require("rsvp");

module.exports = setup;

function setup (input_tree, less_config) {

  return filter(input_tree, {
    extensions: ["less"],
    target: "css",
    process: compile_less
  });

  function compile_less (str) {
    // Borrowed some code from broccoli-filter here:
    return new RSVP.Promise(function(resolve, reject) {
      less.render(str, less_config, function (err, data) {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }
}
