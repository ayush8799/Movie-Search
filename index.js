const express = require("express");
const app = express();
const routes  = require("./routes/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(routes);


app.listen(process.env.PORT || 1500 , () =>{
    console.log("Running on port 1500");
})