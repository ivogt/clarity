const { Schema } = require("mongoose");
const crypto = require("crypto");
const genRandomString = function(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
};
const userSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  salt: {
    type: String
  },
  givenName: {
    type: String
  },
  familyName: {
    type: String
  },
  created: {
    type: Date
  }
});
userSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = genRandomString(16);
  this.password = crypto.scryptSync(this.password, salt, 24).toString('hex');
  this.salt = salt;

  next();
});
userSchema.methods.comparePassword = function(plaintext) {
  const hash = crypto.scryptSync(plaintext, this.salt, 24).toString('hex');
  return hash===this.password;
};
module.exports = userSchema;
