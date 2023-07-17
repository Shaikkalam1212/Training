const express =require('express')
const app = express();
app.use (express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
	res.sendFile(__dirname +"/Mouseclick.html");
});
app.post("/",(req,res)=>
{
	const Username=req.body.Username;
	const Password=req.body.Password;
	console.log('Username:${username}');
	console.log('Password: ${Password}');
	res.send('welcome ${Username} this is your password : ${password}');
	
});
app.listen(9090);