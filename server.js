import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
import routes from "./routes/index.js";
app.use(routes);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT 3000");
});
