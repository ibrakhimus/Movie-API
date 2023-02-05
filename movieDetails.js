let movieInfo = localStorage.getItem("movieTitle");
let userInput = localStorage.getItem("movieName")

const movieDetailsEl = document.querySelector('.movie__details')

async function main(movieInfo, movieName) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&i=${movieInfo}`);
    const moviesData = await movies.json();
}

main();

