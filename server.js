var express = require('express');
var app = express();
var ejs = require( 'ejs' );
var fs = require('fs');

app.get("/:width/:height", function(request, response){
  var width = parseInt(request.params.width)
  var height = parseInt(request.params.height)

  var str = fs.readFileSync('placekitten.ejs', 'utf8' );
  var rendered = ejs.render(str, {width: width, height: height})
  response.send(rendered);

});

app.listen(3000);

console.log('listening on port 3000!');
