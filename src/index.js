const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const requests=require("requests");

const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");
console.log(staticPath);
const tempo="";

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath)
 app.use(express.static(staticPath));
app.get("/home",(req,res)=>{
	res.render("index");
});


app.get("/about",(req,res)=>{
	res.render("about");
});

app.get("/contact",(req,res)=>{
	res.render("contact");
});
app.get("/weather",(req,res)=>{
	res.render("weather");
});

app.get("/temp",(req,res)=>{
	requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=886705b4c1182eb1c69f28eb8c520e20`)
		.on('data',  (chunk) => {
			const objdata=JSON.parse(chunk);
			const arrdata=[objdata];
			console.log(arrdata[0].main.temp);
			res.write(` The temperatureis ${arrdata[0].main.temp}.And the name of the 
				city is ${arrdata[0].name}`)
		  // console.log(`The temperature is ${arrdata[0].name}`)
		
		 
		 



		
		})
		.on('end', (err)=> {
		  if (err) return console.log('connection closed due to errors', err);
		 
		  console.log('end');
		  res.end();
		});
	
})

app.get('/about/*',(req,res)=>{
	res.render('404',{
		errorcomment:'oops this about page could not found!!!'
	});
})

app.get('*',(req,res)=>{
	res.render('404',{
		errorcomment:'oops page could not found!!!'
	});
})

app.get("/about",(req,res)=>{
	res.send("Hello from the about side.")
})
app.listen(4000,()=>{
	console.log("listening port at 4000");
})

