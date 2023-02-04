// http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba

console.log(localStorage)

async function onSearchChange(event) {
    const id = event.target.value;
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${id}`);
    const moviesPosts = await movies.json();
}

async function main(id) {
const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${id}`);
const moviesPosts = await movies.json();
}

main(id); 

function showMovies(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/final%20project/movie.html`
}

const searchButton = document.querySelector('.search__button');