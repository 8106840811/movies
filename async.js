const postList = document.getElementById("post-list")
const url = "https://jsonplaceholder.typicode.com/posts";
async function fetchData (url){
try{
    const response=await fetch(url)
    if(!response.ok){
        throw new Error("failed to fetch data");
    }
    const data = await response.json()
    //console.log(data)
    if(data.length===0){
        postList.innerHTML="<b>No Posts are found</b>"
    }
    data.forEach((post) => {
        const listItem = document.createElement("li")
        listItem.textContent=post.title
        postList.appendChild(listItem)

    });
}
catch (error)
    {
        console.error('Error is' + error)
    }
}

fetchData(url)