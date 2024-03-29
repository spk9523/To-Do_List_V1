import express from "express";
import bodyParser from "body-parser";
import date from "./date.js";

const app = express();
const port = 3000;

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res) => {
    
    const day = date.getDate();

    res.render("list",{listTitle:day,NewListItems:items});
});

app.post("/",(req,res) => {
   let item = req.body.newItem;

   if(req.body.list==="Work") {
    workItems.push(item);
    res.redirect("/work");
   } else {
    items.push(item);
    res.redirect("/");
   }

});

app.get("/work",(req,res) => {
    res.render("list",{listTitle:"Work List",NewListItems:workItems});

});

app.get("/about",(req,res) => {
    res.render("about");

});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
