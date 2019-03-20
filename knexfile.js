// Update with your config settings.
require("dotenv").config();

const dbConnection = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.sqlite3'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    Pool:{
      min: 2,
      max:10,
    },
  }
};
