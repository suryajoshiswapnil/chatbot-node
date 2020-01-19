import express from "express";
import compression from "compression";

import { OrgRouter } from "./routes";

// Express app instance
const app = express();

// The middleware will parse incoming requests with JSON and
// urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// The middleware will attempt to compress response bodies for
// all request that traverse through the middleware
app.use(compression());

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

app.use("/org", OrgRouter);

// Create Server
app.listen(4000, () => {
  console.log("Server is warming up...");
});
