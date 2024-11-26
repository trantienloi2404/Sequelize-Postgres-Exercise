const models = require("./models")
models.sequelize.sync().then(() => { console.log("The tables have been created.") })