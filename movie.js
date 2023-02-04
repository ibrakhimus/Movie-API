const movieListEl = document.querySelector('.movie__list');

async function renderMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${id}`);
    const moviesData = await movies.json();
    console.log(moviesData)

     movieListEl.innerHTML = moviesData.Search.map(movie => movieHTML(movie) ).join('');
}

renderMovies(id);

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