window.onscroll = function() {myFunction()};



var header = document.getElementById("navBar");
var sticky = header.offsetTop;


function myFunction() {
    
    if(window.pageYOffset>=sticky){
        header.classList.add('first-active')
        
    }else{
        header.classList.remove('first-active')
    }
}

