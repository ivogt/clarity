const validator = require("validator");
const { ValidationError } = require("../../../../utils/customErrors");

module.exports = {
  validateEmail: ({ email, errMsg, field = "email" }) => {
    if (!email || !validator.isEmail(email))
      throw new ValidationError(errMsg, field);
  },
  validateGivenName: ({ givenName, errMsg, field = "givenName" }) => {
    if (!givenName || !validator.isLength(givenName, 1, 100))
      throw new ValidationError(errMsg, field);
  },
  validateFamilyName: ({ familyName, errMsg, field = "familyName" }) => {
    if (!familyName || !validator.isLength(familyName, 1, 100))
      throw new ValidationError(errMsg, field);
  },
  validatePassword: ({ password, errMsg, field = "password" }) => {
    if (!password || !validator.isLength(password, 1, 100))
      throw new ValidationError(errMsg, field);
  },
  validateIsTrue: ({ value, errMsg, field = "unknown" }) => {
    if (value !== true) throw new ValidationError(errMsg, field);
  }
};
