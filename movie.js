const movieListEl = document.querySelector('.movie__list');
const userSearch = localStorage.getItem("movieName");

async function renderMovies(userSearch) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${userSearch}`);
    const moviesData = await movies.json();
    const moviesSearch = moviesData.Search;
    console.log(moviesSearch)

     movieListEl.innerHTML = moviesData.Search.map(movie => movieHTML(movie) ).join('');
}

renderMovies(userSearch);

function movieHTML(movie) {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src='${movie.Poster}' alt="">
    </figure>
    <div class="movie__description">
        <p class="movie__title">${movie.Title}</p>
        <p class="movie__para">Type: ${movie.Type} </p>
        <p class="movie__para">${movie.Year}</p>
        <p class="movie__para">imdbID: ${movie.imdbID} </p>
    </div>
</div>`
};