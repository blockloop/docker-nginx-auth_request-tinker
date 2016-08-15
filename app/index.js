/* eslint global-require: "off" */

// external packages
const express = require("express");

// variables
const app = express();
const port = process.env.PORT || 3000;

if (app.get("env") === "development") {
    app.use(require("cors")());
}

// SETTINGS
// =============================================================================
app.set("x-powered-by", false);

app.use((req, res, next) => {
    res.json({ date: new Date().toISOString() });
});


// ROUTES
// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Listening on port ${port}`);

process.on("unhandledRejection", (reason, pr) => {
    console.error(`possibly unhandled rejection at: Promise ${pr} reason: ${reason}`);
});
