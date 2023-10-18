// const container=document.getElementById("container")
// const button=document.getElementById("myButton")

// container.addEventListener("click",function(){
//     console.log("container clicked")
// })

// button.addEventListener("click",function(){
//     console.log("button clicked")
// })


const list=document.getElementById("myList");
list.addEventListener("click",function(event){
    if(event.target.tagName==='Li'){
        alert('List item clicked:'+event.target.textContent);
    }
})