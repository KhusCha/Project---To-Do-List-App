
// An array for different category of work
let designcl = ['work','Personal','Cleaning','Others', 'Travelling', 'Shopping','Cooking'] 

$(document).ready(function(){
        // getting all the class name category 
    let categorys = document.getElementsByClassName('catesec'); 
    // looping in the  categories to find the which, 
    //category class belongs and implement design according 
    // check home.css to get the color of each section
        for(let i=0;i<categorys.length;i++){ 

            if(categorys[i].innerHTML.trim()=='Work'){ 
               categorys[i].classList.add(designcl[0])
               categorys[i].classList.add('commonClass')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add(designcl[1])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Cleaning'){
                categorys[i].classList.add(designcl[2])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Others'){
                categorys[i].classList.add(designcl[3])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Travelling'){
                categorys[i].classList.add(designcl[4])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Shopping'){
                categorys[i].classList.add(designcl[5])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Cooking'){
                categorys[i].classList.add(designcl[6])
                categorys[i].classList.add('commonClass')
            }
        }
});

// this in responsible for making  making cross line when the item is checked for deleting
function checkedOrNot(){ 
    let cb = document.querySelectorAll('.delechack'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.dispdsc'); // gettong all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.dueDate'); // getting all the class for dueDate
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}

// this addEventListener  come into action when we clicked on delete button after we checked which list of items need to be deleted
    
    document.querySelector('#deleteButton').addEventListener('click',function(){
        
    let check = document.querySelectorAll('.delechack:checked') // getting only checked value
    let arrcheck = []  // creating the lsit of checked array

    for(let i of check){
        let gg=''
       gg= i.getAttribute('uid')    // getting uniue id from and pushing into array
        console.log(gg)
        arrcheck.push(gg);
    }
    console.log(arrcheck);
    if(arrcheck.length===0){ // checking if array is null the 
        console.log('no item is checked')
        
        // using show alert to show if there is no items in the array
        swal("No item is checked!!", "please select item to remove!", "error");

        return;
    }
    //here we are making delete request with the help of Ajax request 
    $.ajax({
        type: 'post',
        url: '/delete_todo/?id='+arrcheck,
        //  for deleting a data
        success: function(){ 
            // using  alert to show the data is deleted
            swal("Item is deleted ", "click ok to go back Home ", "success") 
            .then(redir => {
                window.location = '/';
            })
           
        },
        error: function(err){ 
            console.log(err);
        }

    });
})