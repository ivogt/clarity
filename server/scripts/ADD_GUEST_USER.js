const { dbConfig } = require("./../config");
const { logger, createContainer } = require("./../utils");
const applicationProvider = require("./../application/applicationProvider");
const persistenceProvider = require("./../persistence/persistenceProvider");

(async () => {
  if (process.env.NODE_ENV === "production") return;

  const container = createContainer();

  try {
    // #region Register Configs
    container.registerService("dbConfig", () => dbConfig);
    persistenceProvider(container);
    container.registerService("logger", logger);
    // #endregion
    applicationProvider(container);

    const { data, userService } = container;
    await data.init();
    try {
      await userService.create({
        email: "guest@guest.com",
        password: "password",
        givenName: "User",
        familyName: "Guest"
      });
    } catch (e) {
      container.logger.info("User already exists or error:", e.stack || e);
    }

    const [user] = await userService.getByEmail("guest@guest.com");
    container.logger.info("Use guest user [guest@guest.com : password] ");
  } catch (e) {
    container.logger.error(e.stack || e);
    process.exit(1);
  }
})();
