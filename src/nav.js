const express=require("express");

const app=express();

app.get("/",(req,res)=>{
	res.write("<h1>Hi hello </h1>")
	res.send();
});
app.get("/about",(req,res)=>{
	res.send("THis is a about page!!!");
});

app.get("/contact",(req,res)=>{
	res.send("THis is a contact page!!!");
});
app.get("/service",(req,res)=>{
	res.json([
	{
		name:'rashmil',
		age:23,
	}
		]);
});

app.listen(5000,()=>{
	console.log("listening route no 5000");
})