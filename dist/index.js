"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
// initialize configuration
dotenv_1.default.config();
var port = process.env.PORT;
var app = express_1.default();
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, function () {
    console.log("Server started at PORT " + port);
});
//# sourceMappingURL=index.js.map