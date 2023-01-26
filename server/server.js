import express from 'express';
import {APP_PORT} from './config';
import cors from 'cors';
import routes from './Routes';
const app = express();
app.use(cors());
app.use(routes);

app.get('')



app.listen(APP_PORT,()=>console.log(`listening on port ${APP_PORT}`));