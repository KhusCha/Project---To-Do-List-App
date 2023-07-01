//require the Library
const mongoose = require('mongoose');

// Connect to the Database
mongoose.connect('mongodb://127.0.0.1:27017/ToDoListMdb');

// acquire the connection(to check if it is successfull) 
const db= mongoose.connection;


// error
db.on('error', console.error.bind(console, 'Error connecting to Db'));

// Up and running, then print the successfull message
db.once('open',function(){

	console.log('Successfully connected to Mongodb Database, Herzlich willkommen');
});