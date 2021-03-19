

    const fetch = require('node-fetch');

    
    const moviesApi = new URL ('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'); 

    fetch(moviesApi)
    .then(response => response.json())
     .then(result => {
        const lowRatedMovies = result.filter(movie => movie.rating <= 4);
        const badMovies = lowRatedMovies.map(movie => movie.title);
        console.log(badMovies);
        const lowRatedMovies2000 = lowRatedMovies.filter(movie => movie.year >= 2000);
        const badMovies2000 = lowRatedMovies2000.map(movie => movie.title);
        console.log(badMovies2000);