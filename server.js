import express from "express";
import { PORT } from "./config";
import cors from "cors";
import routes from "./Routes";
const app = express();
app.use(cors());
app.use(routes);

app.use(express.static("./client/build"));

app.get("");

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
