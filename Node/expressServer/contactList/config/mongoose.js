//require the library
const mongoose=require('mongoose');

// //connect to the database
mongoose.connect('mongodb://127.0.0.1/contacts_list_db');

// //acquire the connection(to check if it's successful)
const db=mongoose.connection;

// Error
db.on('error',(err)=>{
    console.log('error connecting to db',err);
});

// db.on('error',console.error.bind(console,'error connnecting to db'));

// //up and running then print the message
db.once('open',()=>{
    console.log('successfully connected to db');
});
