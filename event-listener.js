const button = document.getElementById("myButton");
// button.addEventListener("click",function(){
//     alert("Button cliked!");
// });

button.addEventListener('click',function(event){
    console.log('EventType:',event.type);
    console.log('Targetelement:',event.target);
})