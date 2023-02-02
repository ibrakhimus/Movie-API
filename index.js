// http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba


async function main() {
const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=68fafaba&s=${movieName}`);
const moviesPosts = await movies.json();
console.log(moviesPosts)
}

main(); 