const si=document.getElementById("input")
const sbtn=document.getElementById("btn")
const moviesList = document.getElementById("movies")
sbtn.addEventListener("click",function(){
    const searchTerm = si.value
    searchMovies(searchTerm)
    .then(displayMovies)
    .catch(handleError)
})

function searchMovies(value){
    // has to search in api for all movies with that term
    const apikey = "ec4d1436"
    const apiurl = `https://www.omdbapi.com/?s=${value}&apikey=${apikey}`
    return fetch(apiurl)
    .then(function(res){
        console.log(res)
        if(!res.ok){
            throw new Error("network probelm")
        }
        return res.json();
    })
}
function displayMovies(data/*json*/){
    console.log(data)
    // it will display all in ui using dom
    if(data.Response==="True"){
        moviesList.innerHTML=""
        data.Search.forEach(function(movie){
            const movieDiv =document.createElement("div")
            movieDiv.classList.add("movie")
            
            movieDiv.innerHTML=`
            <img src=${movie.Poster} alt=${movie.Title}>
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>`
            moviesList.appendChild(movieDiv);
        })
    }
    else{
        moviesList.innerHTML=`<p>${data.Error}</p>`
    }

}

function handleError(error){
     // this will give if error happens
     console.log(error)
}


