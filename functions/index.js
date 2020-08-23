// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true }));

const fs = require("fs");

// configure our express instance with some body-parser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

exports.davidPhoebia = functions.https.onRequest(app);

// launch server on port 5000.
// const server = app.listen(5000, () => {
//   console.log("listening on port %s...", server.address().port);
// });
