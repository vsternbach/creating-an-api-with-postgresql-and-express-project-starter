import 'dotenv/config';
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import contactsRouter from "./contacts/router";
import customersRouter from "./customers/router";

const app = express();
const port = process.env.SERVER_PORT;

app.use(cookieParser());
app.use(bodyParser.json())

app.use('/contacts', contactsRouter);
app.use('/customers', customersRouter);

app.listen(port, function () {
    console.log(`App is listening on port: ${port}`)
})
