import express from 'express';
import bodyParser from 'body-parser';

import {router as climaRouter} from './clima/clima.router';
import {router as ciudadRouter} from './ciudad/ciudad.router';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/clima', climaRouter);
app.use('/ciudades', );

app.listen(port, () => {
    console.log("Server started at port 3000");
    
});

export {app}

