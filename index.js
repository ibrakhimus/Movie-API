// http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba


function onSearchChange(event) {
    const movieName = event.target.value;
    localStorage.setItem('movieName', movieName);
    window.location.href = `${window.location.origin}/movie.html`
}

