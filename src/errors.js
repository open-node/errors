/**
 * @class
 * @param {object} defines Error info defined [ [code, message] ]
 * @return {Errors} Instance
 */
function Errors(defines) {
  const errors = {};
  for (const [code, msg] of defines) {
    errors[code] = (...args) => {
      if (Array.isArray(args) && args.length === 1) {
        const [first] = args;
        // 只有一个参数且，参数已经是一个封装后的
        if (first instanceof Error && first.code) return first;
      }
      const error = new Error(msg);
      error.code = code;
      error.data = args;

      return error;
    };
  }

  return errors;
}

module.exports = Errors;
