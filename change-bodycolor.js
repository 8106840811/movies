const parent=document.getElementById("parent")
const button=document.getElementById("btn1")
button.addEventListener("click",changeBackground)
function changeBackground(){
    const bd=document.body;
    const randomColor=getHexCode()
    bd.style.backgroundColor=randomColor;
}
function getHexCode(){
    const letters="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}