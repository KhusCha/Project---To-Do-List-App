

const exp = require('express');
const router = exp.Router();
const home_Controller = require('../controllers/homeController');
router.get('/',home_Controller.home);
router.post('/create_todo',home_Controller.createTodo); //controller for creating todo list
router.post('/delete_todo',home_Controller.deleteTodo); // controller for deleting the todo list
router.get('/editdata',home_Controller.EditPage);       // controller for getting Edit page
router.post('/edit-todolist',home_Controller.editDetails); // conteoller for Edting todo list
console.log('router from routes folder(index.js) loaded');
module.exports = router;