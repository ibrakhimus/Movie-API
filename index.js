// http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba

const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id = event.target.value;
    main(id);
}

async function main(id) {
const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${id}`);
const moviesPosts = await movies.json();
}

main(); 

console.log(localStorage)