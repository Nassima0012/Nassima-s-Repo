const express = require("express");
const router = require("./routes/routes")
const app = express();
app.use(express.json());
const port = 3000;

app.use("/user",router)


app.listen(port)




