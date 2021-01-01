const express = require('express')
const app = express();
const cors = require("cors");
require('dotenv').config();
const userRouter = require("./api/users/user.router")
app.use(cors());
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("servidor corriendo en el puerto:  ", process.env.APP_PORT)
})