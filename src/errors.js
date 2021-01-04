/**
 * @class
 * @param {object} defines Error info defined [ [code, message] ]
 * @return {Errors} Instance
 */
function Errors(defines) {
  const errors = {};
  for (const [code, msg] of defines) {
    errors[code] = (...args) => {
      const error = new Error(msg);
      error.code = code;
      error.data = args;

      return error;
    };
  }

  return errors;
}

module.exports = Errors;
