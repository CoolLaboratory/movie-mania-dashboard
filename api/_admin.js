// Initialize the default app
const admin = require('firebase-admin');

const {
  FIREBASE_MOVIE_MANIA_PROJECT_ID,
  FIREBASE_MOVIE_MANIA_CLIENT_EMAIL,
  FIREBASE_MOVIE_MANIA_PRIVATE_KEY,
} = process.env

var app = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_MOVIE_MANIA_PROJECT_ID,
    clientEmail: FIREBASE_MOVIE_MANIA_CLIENT_EMAIL,
    privateKey: FIREBASE_MOVIE_MANIA_PRIVATE_KEY
  })
});

module.exports = app;
