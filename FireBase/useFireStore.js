const storage = require("./firebaseConfig");

const useFireStore = (file) => {
  const storageRef = storage.ref(file.name);

  storageRef.put(file).on("state_changed", (snap) => {
    console.log("uploaded");
  });
};

module.export = useFireStore();
