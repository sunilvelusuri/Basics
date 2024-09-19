const express =require('express');
const port  =9000;
const path  =require('path');
const db    =require('./config/mongoose');
const Contacts =require('./models/contact');

const app=express();
app.set('view engine', 'ejs');                      //setting view engine as ejs
app.set('views',path.join(__dirname,'views'));   
app.use(express.urlencoded());
app.use(express.static('assets'));

// app.use((req,res,next)=>{
//     console.log(req.name);
//     console.log("middleWare-1");
//     req.name="sunil";
//     next();
// });

// app.use((req,res,next)=>{
//     console.log(req.name);
//     next();
// })

// var contactList =[
//     {
//         name  :'sunilkumar',
//         phone :'8297336756'
//     },
//     {
//         name  :'anilkumar',
//         phone :'8309285194'
//     },
//     {
//         name  :'kiran',
//         phone :'9000794279',
//     }
// ]

//Home page controller
// app.get('/',(req,res)=>{
//     return res.render('home',{
//         title         : 'Home Page',
//         contact_List  : contactList,
//     });
// });


// STRING PARAM
// app.get('/delete-contact/:phone',(req,res)=>{
//     console.log(req.params.phone);
// })

// QUERY PARAM
// app.get('/delete-contact/',(req,res)=>{
//     let phone=req.query.phone;
//     let contactIndex =contactList.findIndex(contact => contact.phone==phone);
//     if (contactIndex != -1){
//         contactList.splice(contactIndex,1);
//     }
//     return res.redirect('back');
// })

// This controller is receiving form data and pushing that data into Array
// app.post('/create-contact',(req,res)=>{
//     // contactList.push(req.body);
//     Contacts.create({
//         name :req.body.name,
//         phone:req.body.phone
//     },(err,newContact)=>{
//         if(err){
//             console.log('Error while creating a contact');
//             return;
//         }
//         console.log('*******',newContact);
//         return res.redirect('back');
//     });    
// });



//practice page controller
app.get('/practice',(req,res)=>{
    return res.render('practice',{
        title:'contacts list',        
    });
});

app.get('/delete-contact/',async (req,res)=>{
    try{
        let id=req.query.id;
        await Contacts.findByIdAndDelete(id);
        return res.redirect('back');
    }catch(err){
        console.log('Error while deleting the contact',err);
        return res.status(500).send('Internal Server Error');
    }
});

app.get('/', async (req, res) =>{
    try{
        const cont = await Contacts.find({});            
        return res.render('home',{
            title         : 'Home Page',
            contact_List  : cont,
        });
    }catch (err) {
        console.log('Error while rendering the home page',err);
        return res.status(500).send('Internal Server Error');
    }
});

// Its creating the contact in the DB directly
app.post('/create-contact', async (req, res) => {       //we are not using callback functions instead we use promises
    try {
        const newContact = await Contacts.create({
            name : req.body.name,
            phone: req.body.phone
        });
        console.log('New contact created:', newContact);
        return res.redirect('back');
    } catch (err) {
        console.log('Error while creating a contact:', err);
        return res.status(500).send('Internal Server Error');
    }
});

//server is listening on this port
app.listen(port,(err)=>{
    if(err){
        console.log('Due to error server is not running on port: ',port,err);
    }
    console.log("Server is running on port: ",port);
});



























