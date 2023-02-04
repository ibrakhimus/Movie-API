const movieListEl = document.querySelector('.movie__list');
const userSearch = localStorage.getItem("movieName");

async function renderMovies(userSearch, filter) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${userSearch}`);
    const moviesData = await movies.json();
    const moviesSearch = moviesData.Search;
    // console.log(moviesSearch)

    if (filter === "NEW_TO_OLD") {
        const filteredMovies = moviesSearch.sort((a, b) => {
          const aYear = a.Year.includes("-")
            ? parseInt(a.Year.split("-")[1])
            : parseInt(a.Year);
          const bYear = b.Year.includes("-")
            ? parseInt(b.Year.split("-")[1])
            : parseInt(b.Year);
          return bYear - aYear;
        });
        console.log(filteredMovies);
      } else if (filter === "OLD_TO_NEW") {
        moviesSearch.sort((a, b) => {
          const aYear = a.Year.includes("-")
            ? parseInt(a.Year.split("-")[0])
            : parseInt(a.Year);
          const bYear = b.Year.includes("-")
            ? parseInt(b.Year.split("-")[0])
            : parseInt(b.Year);
          return aYear - bYear;
        });
      }

     showMovies = moviesSearch.filter((movie, index) => index < 9).map((movie) => movieHTML(movie)).join('');
     movieListEl.innerHTML =  showMovies;

}

function filterMovies(event) {
    renderMovies(userSearch, event.target.value);
}

renderMovies(userSearch);

function movieHTML(movie) {
    return `<div class="movie" onclick="${movie.imdbID}">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src='${movie.Poster}' alt="">
    </figure>
    <div class="movie__description">
        <p class="movie__title">${movie.Title}</p>
        <p class="movie__para color">${movie.Type} </p>
        <p class="movie__para">${movie.Year}</p>
    </div>
</div>`
}; 


setTimeout(() => {
    renderMovies(userSearch);
}, 1000);
