require("dotenv").config();
const dbConfig = require("./dbConfig");
const { Sequelize, Model, DataTypes } = require("sequelize");

const test = require("./main_model/01_example");

// Create Connection Between Sequelize and Database (--> MySQL)
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.options
);

// //Test Connection
// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

const main_db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  test: test(sequelize, DataTypes),
};

//Settings for Associate
// Object.keys(main_db).forEach((modelName) => {
//   if (main_db[modelName].associate) {
//     main_db[modelName].associate(main_db);
//   }
// });

// Synchronize Sequelize Model and Actual Datatables in SQL
main_db.sequelize
  .sync({ alter: true })
  // .sync({ force: true }) // force sync --> remove old and create new
  //.sync({ alter: true }) // sync update --> update existing table only
  .then(async () => {
    console.log("Synchronization completed.");
    // Call seeder file to seed the database based on .env conditional
    if (process.env.SEED_DB === "TRUE") {
      const seeder = require("./seeder");
      await seeder.seedData(main_db);
      console.log("Seeder completed.");
    }
  });

module.exports = main_db;
