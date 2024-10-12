/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
admin.initializeApp();
const db = admin.firestore();
exports.getUsers = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const usersSnapshot = await db.collection("users").get();
      const users = [];
      usersSnapshot.forEach((doc) => {
        users.push({id: doc.id, ...doc.data()});
      });
      res.status(200).send(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Error fetching users");
    }
  });
});

exports.getVolunteers = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const volunteersSnapshot = await db.collection("users")
          .where("role", "==", "volunteer").get();
      const volunteers = [];
      volunteersSnapshot.forEach((doc) => {
        volunteers.push({id: doc.id, ...doc.data()});
      });
      res.status(200).send(volunteers);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Error fetching users");
    }
  });
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
