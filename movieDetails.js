let movieTitle = localStorage.getItem("movieTitle");
let movieName = localStorage.getItem("movieName")

const movieDetailsEl = document.querySelector('.movie__details')

async function main(movieTitle) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&i=${movieTitle}`);
    const moviesData = await movies.json();
    const movieDetailsHTML = detailsHTML(moviesData);
    movieDetailsEl.innerHTML = moviesData.map(movie => detailsHTML(movie)).join('');
    movieDetailsEl.innerHTML += movieDetailsHTML;
    
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
                    <p class="movie__description--para"><b class="highlight color">Ratings:</b>${movie.imdbRating} / 10</p>
                    <p class="movie__description--para"><b class="highlight color">Votes:</b> ${movie.imdbVotes}</p>
                    <p class="movie__description--para"><b class="highlight color">Release Date:</b> ${movie.Released}</p>
                </div>`
}

function getTitle(movieTitle) {
    localStorage.setItem("movieTitle", movieTitle);
    window.location.href = `${window.location.origin}/movieDetails.html`;
  }