const mongoose = require('mongoose');

exports.connectDb = async () => {
  try {
    const connection = mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log('Connected 🎠 to database 🤝'.cyan.underline.bold);
  } catch (error) {
    console.log(`Sorry, couldn't connect ❌, ${error.message}`.underline.bold);
    process.exit(1);
  }
};
