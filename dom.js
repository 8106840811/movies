const parent=document.getElementById("parent")

const count=document.getElementById("count")
const incrBtn=document.getElementById("btn1")
const decrBtn=document.getElementById("btn2")
const resetBtn=document.getElementById("btn3")




let c=0;
/*incrBtn.addEventListener("click", function (){
    c=c+1;
    count.innerHTML=c;

})*/
incrBtn.addEventListener("click",incr)
decrBtn.addEventListener("click",decr)
resetBtn.addEventListener("click",reset)
function incr(){
    c=c+1;

    count.innerHTML=c;
}

function decr(){
    
    c=c-1;
    count.innerHTML=c;
    if(c<0){
        count.innerHTML="Not possible"
    }
}
function reset(){
    c=0;
    count.innerHTML=c;
}






