//const db = require('./config/mongoose')
const TodoLists = require('../models/todoList');
// function for redirecting to main home page
module.exports.home = function(req,res){
    // fetching using mongoose
    TodoLists.find({})
    .then(function(todo){
        
        
        return res.render('homePage',{
            title:"Home",
            todoList:todo
        })
           
        }).catch(function(err){


            console.log('error in fetching data');
            return;
        
        })
    
}
// function for new Data
function dateValue(dueDate){
    // static value for implementing monthe value
    let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec'] 


    newdate = '';
    let monapp = '';
    // checking months 
    if(dueDate[1] == '01'){
        monapp=months[0];
    }
    else if(dueDate[1] == '02'){
        monapp=months[1];
    }else if(dueDate[1] == '03'){
        monapp=months[2];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '05'){
        monapp=months[4];
    }else if(dueDate[1] == '06'){
        monapp=months[5];
    }else if(dueDate[1] == '07'){
        monapp=months[6];
    }else if(dueDate[1] == '08'){
        monapp=months[7];
    }else if(dueDate[1] == '09'){
        monapp=months[8];
    }else if(dueDate[1] == '10'){
        monapp=months[9];
    }else if(dueDate[1] == '11'){
        monapp=months[10];
    }else if(dueDate[1] == '12'){
        monapp=months[11];
    }
    newdate =dueDate[2]+'-'+monapp+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}

// function for creating todo list
module.exports.createTodo = function(req,res){
    // splitting date and taking month value
    
    let dueDate =req.body.dateValue.split('-'); 
   let newdate='';
    newdate= dateValue(dueDate);     
    TodoLists.create({ 
    // creating new todo and storing into DB
        desc:req.body.desc,
        category:req.body.category,
        dueDate: newdate
    }).then(function(newArr){
       
        return res.redirect('/');
    }).catch(function(err){

            console.log('Oops error occoured');
            return;
        
    })
}
// function for deleting todo list
module.exports.deleteTodo = function(req,res){ 
   let  sp = req.query.id; // getting the id from ui
    newsp = sp.split(','); 
    for(let i=0;i<newsp.length;i++){ // looping over newsp  to delete all the checked value
        TodoLists.findByIdAndDelete(newsp[i]).then(function(){
            
                return res.redirect('back');
            
        }).catch(function(err){
            console.log('err');
        })
    }
return res.redirect('/');
}
// function for fetching data for edit page
module.exports.EditPage = function(req,res){ // here we are fetching the data whic need to be edited
    console.log('aaa',req.query)
    TodoLists.findById(req.query.id,function(err,todoLists){
        if(err){ console.log('hi man!! it an error'); return}
        return res.render('editPage',{
        title:'Edit Page',
        todolist:todoLists
        })
    })
}
// function for updating data after the todo is being edited
module.exports.editDetails = function(req,res){
    dueDate =req.body.dueDate.split('-'); // splitting date and taking month value
    let newdate='';
    newdate= DateValeu(dueDate);     
     TodoLists.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:newdate}} ,function(err,todoData){
        if(err){console.log('erroe while updating'); return}
        return res.redirect('/')
    })
}