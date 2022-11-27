import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './mongo';
import { create, get } from './controllers/product';
import { createUser, getUser } from './controllers/user';

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
connect();

app.post('/products', async (req, res) => {
  const body = req.body;
  const result = await create(body);
  res.json(result);
});

app.get('/products', async (req, res) => {
  const result = await get();
  res.json(result);
});


app.get('/users', async(req, res) => {
  const userResults = await getUser();
  res.json(userResults)
})

app.post('/users', async(req, res) => {
  const userBody = req.body
  const result = await createUser(userBody)
  res.json(result);
})


app.get('/', (req, res) => {
  res.json({
    message: 'welcome to ecommerce rest api',
  });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
