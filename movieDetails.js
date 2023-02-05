let movieTitle = localStorage.getItem("movieTitle");
let movieName = localStorage.getItem("movieName");

const movieDetailsEl = document.querySelector('.movie__details');
const MovieListEl = document.querySelector('.movie__list');

async function main(title) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=68fafaba&i=${title}`);
    const movieData = await movies.json();
    movieDetailsEl.innerHTML = detailsHTML(movieData);
}

main(movieTitle);

function detailsHTML(movie) {
    return `<h2 class="movie__details--title">${movie.Title}</h2>
            <div class="movie__wrapper">
                <div class="img__title--wrapper">
                    <figure class="movie__img--wrapper">
                        <img src="${movie.Poster}" alt="" class="movie__details--img">
                    </figure>
                </div>
                <div class="movie__details--description">
                    <p class="movie__description--para"><b class="highlight color">Plot:</b> ${movie.Plot}</p>
                    <p class="movie__description--para"><b class="highlight color">Type:</b> ${movie.Type}</p>
                    <p class="movie__description--para"><b class="highlight color">Rated:</b> ${movie.Rated}</p>
                    <p class="movie__description--para"><b class="highlight color">Genre:</b> ${movie.Genre}</p>
                    <p class="movie__description--para"><b class="highlight color">Ratings:</b> ${movie.imdbRating} / 10</p>
                    <p class="movie__description--para"><b class="highlight color">Votes:</b> ${movie.imdbVotes}</p>
                    <p class="movie__description--para"><b class="highlight color">Release Date:</b> ${movie.Released}</p>
                </div>`
}

async function similarMovies(movieName) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=68fafaba&s=${movieName}`);
    const moviesData = await movies.json();
    const moviesSearch = moviesData.Search;
    const limitedMovies = moviesSearch.slice(0, 3);
    showMovies = limitedMovies.map((movie) => similarMoviesHTML(movie)).join('');
    MovieListEl.innerHTML =  showMovies;
}

function similarMoviesHTML(movie) {
    return `<div class="movie" onclick="getTitle('${movie.imdbID}')")>
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.Poster}" alt="">
    </figure>
    <div class="movie__description">
        <p class="movie__title">${movie.Title}</p>
        <p class="movie__para color">${movie.Type}</p>
        <p class="movie__para">${movie.Year}</p>
    </div>
    </div>`
}

function getTitle(title) {
    localStorage.setItem("movieTitle", title);
    window.location.href = "movieDetails.html";
    console.log(title);
}

similarMovies(movieName);
