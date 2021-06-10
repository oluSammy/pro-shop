const express = require('express');
const { connectDb } = require('./database/mongo.connect.js');
const dotenv = require('dotenv');
const { errorHandler, notFund } = require('./middlewares/errorMiddleWare.js');
const productRoute = require('./routes/product.route.js');
const userRoute = require('./routes/userRoute.js');
const colors = require('colors');
const path = require('path');


dotenv.config();
connectDb();
const app = express();

app.use(express.json());

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

// const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.send(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Api is up and running!');
  });
}

app.use(notFund);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`.yellow.bold);
});
