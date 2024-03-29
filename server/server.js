const { dbConfig, serverConfig, routesConfig } = require("./config");
const { logger, createContainer } = require("./utils");
const presentationProvider = require("./presentation/presentationProvider");
const applicationProvider = require("./application/applicationProvider");
const persistenceProvider = require("./persistence/persistenceProvider");

(async () => {
  const container = createContainer();

  try {
    // #region Register Configs
    container.registerService("dbConfig", () => dbConfig);
    container.registerService("serverConfig", () => serverConfig);
    container.registerService("routesConfig", () => routesConfig);
    // #endregion

    // #region Register Lazy Installation Dependencies
    applicationProvider(container);
    persistenceProvider(container);
    container.registerService("logger", logger);
    // #endregion

    // #region Register Dependencies
    presentationProvider(container);
    // #endregion

    const { data, app, appInit } = container;
    await data.init();
    await appInit();
  } catch (e) {
    container.logger.error(e.stack || e);
    process.exit(1);
  }
})();
