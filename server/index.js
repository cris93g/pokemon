const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
const port = process.env.port || 3001;

app.listen(port, () => {
	console.log(`app is running on port ${port}`);
});
