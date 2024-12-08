const cors = require("cors");
const bodyParser = require("body-parser");
const corsConfig = require("./corsConfig");

module.exports = (app) => {
    app.use(cors(corsConfig));
    app.use(bodyParser.json());
};
