const express = required("express");
const https = required("https");
const app = express();

app.get("/", functional(req,res){
  res.send("server is up and running")
})

app.listen(3000, functional(){
  console.log("server is running on port 3000");
})
