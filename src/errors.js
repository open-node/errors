const util = require("util");

/**
 * @class
 * @param {object} defines Error info defined [ [code, message] ]
 * @return {Errors} Instance
 */
function Errors(defines) {
  const errors = {};
  for (const [code, msg] of defines) {
    errors[code] = (...args) => {
      const error = new Error(util.format(msg, ...args));
      error.code = code;

      return error;
    };
  }

  return errors;
}

module.exports = Errors;
