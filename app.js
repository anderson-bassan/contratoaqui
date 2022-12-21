/* == IMPORTS == */


const express = require('express');
const app = express();
const path = require('path');


/* == SET UP == */


const public_dir = path.join(__dirname, '/public');
app.use(express.static(public_dir));


/* == VIEWS == */


app.set('view engine', 'hbs');
app.get('/', (req, res) => {
	res.render('index');
})


/* == APP START == */


app.listen(80, () => {
	console.log('up \'n running');
})