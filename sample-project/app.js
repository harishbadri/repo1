
/*
const express = require('express');
const app = express();
const messages = require('./message.js');
console.log(messages["letters"]);
console.log(messages["chars"]);
let all_letters = ' ';

app.get('/', function(request,response){
	for (let i=0; i<messages["letters"].length; i++)
	{
		all_letters += messages["letters"][i] + '<br/>';
	}
	response.send(all_letters);


});

app.get('/users/:name', function(req, res){
	res.send(req["params"]["name"]);
})

app.listen(3000, function(error){
	if (error)
	{
		console.log("Error");
	}
	else
	{
		console.log("Running");
	}
});
*/

const http = require('http');
const fs = require('file-system');

http.createServer(function(req, res){
	try{
	let file1 = fs.readFileSync('.' + req['url'] + '.txt');
	res.write("Req received::" + req['url'] + '::: content' + file1);
	}
	catch(err)
	{
		res.write("Error-404: " + req['url'] + ' file not found'); 
	}

	res.end();

}).listen(3000);