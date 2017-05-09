var express= require("express");
var bp = require('body-parser');
var expressValidator = require('express-validator');
var app= express();
app.use(bp.urlencoded({ extended: false }));
app.use(expressValidator())
app.listen(3333); 
app.use(express.static(__dirname+'/client'));
var data;

app.get("/", function () {	
});
app.get('/accueil',function(req, res){
	res.send(data);
})
app.post("/new", function(req,res){

	req.checkBody('type', 'Invalid gender').notEmpty();
	req.checkBody('Name', 'Invalid name').notEmpty();
	req.checkBody('firstName', 'Invalid firstname').notEmpty();
	req.checkBody('Day', 'Invalid birthdate').notEmpty();
	req.checkBody('Month', 'Invalid city').notEmpty();
	req.checkBody('Years', 'Invalid zipCode').notEmpty();
	req.checkBody('Mail', 'Invalid phoneNumber').notEmpty();
	req.asyncValidationErrors().then(function(){
		
 data= req.body
	res.redirect('http://localhost:3333/accueil.html')
	return data;

		}, function (errors){
			
			res.send(errors)
})
})

