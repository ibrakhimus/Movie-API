// http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba
const searchBtn = document.querySelector('.search__btn');

async function onSearchChange(event) {
    const movieName = event.target.value;
    localStorage.setItem('movieName', movieName);

    searchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    searchBtn.classList.add("loading");
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.href = `${window.location.origin}/movie.html`;
}


