const mongoose = require("mongoose");

const gorurHatDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DB_CONNECTION_LINK,//place your mongoDb connection
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MONGOOSE CONCT");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = gorurHatDB;
