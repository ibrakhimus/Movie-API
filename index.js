// http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba


async function main() {
const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${title}`);
const moviesPosts = await movies.json();
}

main(); 

async function onSearchChange(event) {
    const id = event.target.value;
    main(id);
}

console.log(localStorage)