var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("NARAYANI MILK");});
app.get("/product",(req, res)=>{var p={ "id":45, "title":"Nourishing the future of India", };
                                       res.send(p);
});
app.listen(8000);
console.log("App is listening on port 8000");