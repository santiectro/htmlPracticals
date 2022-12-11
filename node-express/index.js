import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connect } from "./mongo";
import { create, get, remove, update, getOne } from "./controllers/product";
import { login, register } from "./controllers/auth";
import { upload } from "./controllers/file";
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
connect();
app.use(cors("*"));

app.use('/uploads',express.static('uploads'))

app.delete("/products/:id", async(req, res) => {
  try {
   const result =  await remove(req.params.id)
   res.json({result})
  } catch (error) {
   res.status(400).json({message: error.message})

    
  }
})


app.get("/products/:id", async(req, res) => {
  try {
   const result =  await getOne(req.params.id)
   res.json({result})
  } catch (error) {
   res.status(400).json({message: error.message})
  }
})


app.put("/products/:id", async(req, res) => {
  try {
    const result = await update(req.params.id,  req.body)
    res.json({result})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})


app.post("/login", async (req, res) => {
  try {
    const body = req.body;
    const token = await login(body);
    res.json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const body = req.body;
    const user = await register(body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const body = req.body;
    const result = await create(body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  const result = await get();
  res.json(result);
});

app.get("/users", async (req, res) => {
  const userResults = await getUser();
  res.json(userResults);
});

app.post("/users", async (req, res) => {
  const userBody = req.body;
  const result = await createUser(userBody);
  res.json(result);
});

app.get("/", (req, res) => {
  res.json({
    message: "welcome to ecommerce rest api",
  });
});

app.post("/upload-images", upload.single("file"), async (req, res) => {
  if (req.fileError) {
    return res.status(400).json({ message: req.fileError});
  }
  res.json({ message: "File uploaded",url:`http://localhost:3000/uploads/${req.file.filename}` });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
