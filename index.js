const exp = require('express');
const app = exp();
// Port number set to 10k
const port = 8000;
app.use(exp.urlencoded());
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout)
const db = require('./config/mongoose');
const TodoLists = require('./models/todoList');
// it is use to handle middle ware here we are using express.urlenceode to us e the parser

app.use('/',require('./routes'))
app.use(exp.static('./assets')) // for getting static
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`error in running the ${port}`);
        return;
    }
    console.log(`Server is running @ ${port}`);
})
