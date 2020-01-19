"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const routes_1 = require("./routes");
// Express app instance
const app = express_1.default();
// The middleware will parse incoming requests with JSON and
// urlencoded payloads
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// The middleware will attempt to compress response bodies for
// all request that traverse through the middleware
app.use(compression_1.default());
app.get("/", (req, res) => {
    const user = {
        name: req.query.name || "unknown"
    };
    res.json({
        id: Math.ceil(Math.random() * 1000),
        user: user,
        message: "Hey there!"
    });
});
app.use("/org", routes_1.OrgRouter);
// Create Server
app.listen(4000, () => {
    console.log("Server is warming up...");
});
//# sourceMappingURL=index.js.map