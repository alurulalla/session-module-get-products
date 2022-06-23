const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const packageDetails = [
  {
    id: uuidv4(),
    name: 'Basic Plan',
    price: 27.36,
    description: 'A basic plan with 100 mbps',
  },
  {
    id: uuidv4(),
    name: 'Silver Plan',
    price: 57.36,
    description: 'A silver plan with 500 mbps',
  },
  {
    id: uuidv4(),
    name: 'Premium Plan',
    price: 77.36,
    description: 'A premium plan with 1000 mbps',
  },
];

const getProducts = (req, res) => {
  res.json(packageDetails);
};

app.get('/api/v1/products', getProducts);

app.listen(PORT, () => console.log(`products app running on port ${PORT}`));
