import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './mongo';
import { create, get } from './controllers/product';
import { login, register } from './controllers/auth';
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
connect();

app.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const token = await login(body);
    res.json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const body = req.body;
    const user = await register(body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {});

app.post('/products', async (req, res) => {
  const body = req.body;
  const result = await create(body);
  res.json(result);
});

app.get('/products', async (req, res) => {
  const result = await get();
  res.json(result);
});

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to ecommerce rest api',
  });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
