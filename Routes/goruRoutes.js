const express = require("express");
const router = express.Router();
const Goru = require("../Schema/goruSchema");
const multer = require("multer");
const path = require("path");
const firebase = require("firebase");
require("firebase/storage");
const fs = require("fs");
global.XMLHttpRequest = require("xhr2");

const firebaseConfig = {
   apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const fireapp = firebase.initializeApp(firebaseConfig);

const useFireStore = (file, res) => {
  const fireStorage = fireapp.storage();
  const storageRef = fireStorage.ref("GoriImages/" + file.originalname);

  storageRef
    .put(file.buffer, {
      contentType: "image/jpeg",
    })
    .on(
      "state_changed",
      (snap) => {
        console.log("uploaded");
      },
      (err) => {
        setError(err);
      },
      async () => {
        try {
          const url = await storageRef.getDownloadURL();
          res.json(url);
        } catch (error) {
          res.json(error);
        }
      }
    );
};

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
}).single("GoruImage");

// Goru get
router.get("/", async function (req, res) {
  try {
    const allGorus = await Goru.find();
    res.json(allGorus);
  } catch (err) {
    console.log(err.message);
    res.send("Not Found");
  }
});

router.post("/", async (req, res) => {
  try {
    const newGoru = new Goru(req.body);
    const createdGoru = await newGoru.save();
    res.json(newGoru);
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/images", (req, res) => {
  upload(req, res, (err) => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file); //Here you get file.

    useFireStore(req.file, res);
  });
});
module.exports = router;
