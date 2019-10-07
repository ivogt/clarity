const {
  validateEmail,
  validateFamilyName,
  validateGivenName,
  validatePassword,
  validateIsTrue
} = require("./validationFuncs");
const {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_EMAIL_OR_PASSWORD,
  INVALID_FAMILY_NAME,
  INVALID_GIVEN_NAME,
  EMAIL_ALREADY_EXISTS,
  USER_NOT_FOUND
} = require("./constants/errorMessages");

const {
  ValidationError,
  NotFoundError
} = require("../../../utils/customErrors");

module.exports = ({ data, whereSpecification, orderSpecification }) => {
  const validateUniqueEmail = async email => {
    const {
      build,
      operators: { match }
    } = whereSpecification;
    const where = build("email", match(email));

    const users = await data.user.getAll({ where });

    if (users.length > 0)
      throw new ValidationError(EMAIL_ALREADY_EXISTS, "email");
  };

  const validateUserExists = async id => {
    const user = await data.user.getById(id);
    if (!user) throw new NotFoundError(USER_NOT_FOUND, "id");
  };

  const validateUserEmailExists = async email => {
    const {
      build,
      operators: { match }
    } = whereSpecification;
    const where = build("email", match(email));

    const users = await data.user.getAll({ where });
    if (!users.length) throw new NotFoundError(USER_NOT_FOUND, "email");
  };

  const validateNewUser = async ({
    email,
    password,
    givenName,
    familyName
  }) => {
    validateEmail({ email, errMsg: INVALID_EMAIL });
    validateGivenName({ givenName, errMsg: INVALID_GIVEN_NAME });
    validatePassword({ password, errMsg: INVALID_PASSWORD });
    validateFamilyName({ familyName, errMsg: INVALID_FAMILY_NAME });
    await validateUniqueEmail(email);
  };

  const validateUpdatedUser = async (id, { givenName, familyName }) => {
    validateGivenName({ givenName, errMsg: INVALID_GIVEN_NAME });
    validateFamilyName({ familyName, errMsg: INVALID_FAMILY_NAME });
    await validateUserExists(id);
  };

  return {
    create: async user => {
      await validateNewUser(user);
      const newUser = await data.user.create({
        ...user,
        created: new Date()
      });
      return newUser;
    },

    getByEmail: async email => {
      const {
        build,
        operators: { match }
      } = whereSpecification;
      const where = build("email", match(email));
      return await data.user.getAll({ where });
    },

    getAndVerify: async (email, plainpassword) => {
      await validateUserEmailExists(email);
      const {
        build,
        operators: { match }
      } = whereSpecification;
      const where = build("email", match(email));
      const [user] = await data.user.getOne({ where });
      const isSamePassword = user.comparePassword(plainpassword);
      validateIsTrue({
        value: isSamePassword,
        errMsg: INVALID_EMAIL_OR_PASSWORD
      });
      return user;
    },

    getById: async id => {
      await validateUserExists(id);
      const user = await data.user.getById(id);
      return user;
    },

    getAll: async () => {
      const { orderBy, multipleOrder } = orderSpecification;
      const order = multipleOrder([
        orderBy({ field: "givenName", orderType: "desc" })
      ]);
      const users = await data.user.getAll({ order });
      return users;
    },

    updateById: async (id, { givenName, familyName }) => {
      await validateUpdatedUser(id, { givenName, familyName });
      const updatedUser = await data.user.updateById(id, {
        givenName,
        familyName
      });
      return updatedUser;
    },

    deleteById: async id => {
      await validateUserExists(id);
      await data.user.deleteById(id);
    }
  };
};
