var hiButton=document.getElementById('one');
var byeButton=document.getElementById('two');
function hi(){
    alert("Hi there");
}
function bye(){
    alert("Bye, see you later");
}

hiButton.addEventListener('mouseover',hi);
byeButton.addEventListener('click',hi);
byeButton.addEventListener('click',bye);


document.addEventListener('keypress',function(event){
    console.log("keyPressed",event.keyCode);
});

document.addEventListener('keydown',function(event){
    console.log("key down",event.keyCode);
});

document.addEventListener('keyup',function(event){
    console.log("key up",event.keyCode);
});

var innerDiv = document.getElementById("div2");
innerDiv.addEventListener('click', function(event){
    console.log("Inner div clicked");
    event.stopPropagation();
});

var outerDiv = document.getElementById("div1");
outerDiv.addEventListener('click', function(){
    console.log("Outer div clicked");
});

