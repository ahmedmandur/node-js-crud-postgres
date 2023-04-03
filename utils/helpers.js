var randomstring = require("randomstring");
exports.randomString = () =>
  randomstring.generate({
    length: 5,
    charset: "alphanumeric",
    capitalization: true,
  });
