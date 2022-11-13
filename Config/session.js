// importing expression and connection mongodb to store sessions
const espressSession = require("express-session");
const mongodbStore = require("connect-mongodb-session");

// passing basic db store info to all sessions 
function createSessionStore() {
  const MongoDBStore = mongodbStore(espressSession);
  const store = new MongoDBStore({
    uri: "mongodb://localhost:27017",
    databaseName: "express",
    collection: "sessions",
  });

  return store;
}

// session specific attributes
function createSessionConfig() {
  return {
    secret: "switchEXPRESS",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
    },
  };
}

module.exports = createSessionConfig;