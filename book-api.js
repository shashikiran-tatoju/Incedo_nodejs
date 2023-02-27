 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');

 const app = express();
 const port = 4400

 // get  put post  delete test  and say done 


 let books =[{
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
},
{
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
},
{
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
}];

 var allowCrossDomain = function(req , res , next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT ,POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

 }


app.use(cors());
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

app.get('/books',(req , res)=>{
    res.json(books);
});

app.listen(port , ()=> console.log(`App listeining on port ${port}..! `));
