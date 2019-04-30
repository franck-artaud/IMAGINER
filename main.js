const express = require('express');
const app = express();
const handlebars = require('handlebars');
var exphbs  = require('express-handlebars');

// On installe handlebars un moteur de templating très utilisé 
// https://handlebarsjs.com/
// https://www.npmjs.com/package/handlebars
// mais il else, existe plein d'autres
// https://colorlib.com/wp/top-templating-engines-for-javascript/


//route
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    const salutation = "Bienvenus sur notre Blog";
    res.render("home", {hello:salutation});
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

 

app.get("/", function(req, res) {
    res.send("Coucou");
})

app.listen(3000, function(){
    console.log('le serveur tourne sur le port 3000');
})