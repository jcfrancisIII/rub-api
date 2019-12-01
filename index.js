import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/rub.routes";

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/RUBdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => res.send(`Node and express running on ${PORT}`));

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
