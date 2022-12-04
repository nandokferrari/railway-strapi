const path = require("path");

module.exports = ({ env }) => {
  const ENVIRONMENT = env("ENV");

  let database_configuration = null;
  if (ENVIRONMENT === "develop") {
    database_configuration = {
      connection: {
        client: "sqlite",
        connection: {
          filename: path.join(
            __dirname,
            "..",
            env("DATABASE_FILENAME", ".tmp/data.db")
          ),
        },
        useNullAsDefault: true,
      },
    };
  }
  if (ENVIRONMENT === "production") {
    database_configuration = {
      connection: {
        client: "mysql",
        connection: {
          host: env("DATABASE_HOST", "67.23.238.53"),
          port: env.int("DATABASE_PORT", 3306),
          database: env("DATABASE_NAME", "hms_fernandev"),
          user: env("DATABASE_USERNAME", "hms_fernandev_user"),
          password: env("DATABASE_PASSWORD", "M^x+^,FnjrAP"),
          ssl: false,
        },
        debug: false,
      },
    };
  }

  return database_configuration;
};
