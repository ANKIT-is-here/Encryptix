document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    const genreSelect = document.getElementById('genreSelect').value;
    getMovieRecommendations(searchInput, genreSelect);
});

function getMovieRecommendations(query, genre) {
    // Extended list of movies for this example
    const movies = [
        { title: 'Inception', genre: 'Sci-Fi' },
        { title: 'The Godfather', genre: 'Crime' },
        { title: 'The Dark Knight', genre: 'Action' },
        { title: 'Pulp Fiction', genre: 'Crime' },
        { title: 'The Shawshank Redemption', genre: 'Drama' },
        { title: 'The Matrix', genre: 'Sci-Fi' },
        { title: 'Fight Club', genre: 'Drama' },
        { title: 'Forrest Gump', genre: 'Drama' },
        { title: 'Gladiator', genre: 'Action' },
        { title: 'The Avengers', genre: 'Action' },
        { title: 'Interstellar', genre: 'Sci-Fi' },
        { title: 'Parasite', genre: 'Drama' },
        { title: 'Joker', genre: 'Crime' },
        { title: 'The Lion King', genre: 'Adventure' },
        { title: 'Titanic', genre: 'Drama' },
        { title: 'Jurassic Park', genre: 'Adventure' },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy' },
        { title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy' },
        { title: 'Star Wars: Episode IV - A New Hope', genre: 'Sci-Fi' },
        { title: 'Back to the Future', genre: 'Sci-Fi' },
        { title: 'The Silence of the Lambs', genre: 'Horror' },
        { title: 'Se7en', genre: 'Crime' },
        { title: 'Saving Private Ryan', genre: 'Drama' },
        { title: 'Indiana Jones and the Raiders of the Lost Ark', genre: 'Adventure' },
        { title: 'The Shining', genre: 'Horror' },
        { title: 'The Terminator', genre: 'Action' },
        { title: 'Alien', genre: 'Sci-Fi' },
        { title: 'The Incredibles', genre: 'Comedy' },
        { title: 'Toy Story', genre: 'Adventure' },
        { title: 'Finding Nemo', genre: 'Adventure' },
        { title: 'Up', genre: 'Adventure' },
        { title: 'Braveheart', genre: 'Drama' },
        { title: 'Casablanca', genre: 'Drama' },
        { title: 'Rocky', genre: 'Drama' },
        { title: 'Die Hard', genre: 'Action' },
        { title: 'Mad Max: Fury Road', genre: 'Action' },
        { title: 'The Big Lebowski', genre: 'Comedy' },
        { title: 'Groundhog Day', genre: 'Comedy' },
        { title: 'Anchorman: The Legend of Ron Burgundy', genre: 'Comedy' },
        { title: 'Ghostbusters', genre: 'Comedy' },
        { title: 'Monty Python and the Holy Grail', genre: 'Comedy' },
        { title: 'Zombieland', genre: 'Comedy' },
        { title: 'Superbad', genre: 'Comedy' },
        { title: 'Step Brothers', genre: 'Comedy' },
        { title: 'The Hangover', genre: 'Comedy' },
        { title: '3 Idiots', genre: 'Drama' },
        { title: 'Dangal', genre: 'Drama' },
        { title: 'Sholay', genre: 'Action' },
        { title: 'Kabhi Khushi Kabhie Gham', genre: 'Drama' },
        { title: 'Dilwale Dulhania Le Jayenge', genre: 'Romance' },
        { title: 'Lagaan', genre: 'Drama' },
        { title: 'Mughal-e-Azam', genre: 'Historical' },
        { title: 'Taare Zameen Par', genre: 'Drama' },
        { title: 'Chennai Express', genre: 'Comedy' },
        { title: 'PK', genre: 'Comedy' },
        { title: 'Zindagi Na Milegi Dobara', genre: 'Adventure' },
        { title: 'Barfi!', genre: 'Romance' },
        { title: 'Queen', genre: 'Comedy' },
        { title: 'Gully Boy', genre: 'Drama' },
        { title: 'Bajirao Mastani', genre: 'Historical' },
        { title: 'Padmaavat', genre: 'Historical' },
        { title: 'Swades', genre: 'Drama' },
        { title: 'Raazi', genre: 'Thriller' },
        { title: 'Dil Chahta Hai', genre: 'Drama' },
        { title: 'Bhaag Milkha Bhaag', genre: 'Biographical' },
        { title: 'Uri: The Surgical Strike', genre: 'Action' },
        { title: 'Kuch Kuch Hota Hai', genre: 'Romance' },
        { title: 'My Name is Khan', genre: 'Drama' },
        { title: 'Andhadhun', genre: 'Thriller' },
        { title: 'Stree', genre: 'Horror' },
        { title: 'Article 15', genre: 'Drama' },
        { title: 'Jab We Met', genre: 'Romance' },
        { title: 'Badhaai Ho', genre: 'Comedy' },
        { title: 'Piku', genre: 'Drama' },
        { title: 'The Lunchbox', genre: 'Romance' },
        { title: 'Dear Zindagi', genre: 'Drama' },
        { title: 'Kesari', genre: 'Historical' },
        { title: 'Veer-Zaara', genre: 'Romance' },
        { title: 'Sanju', genre: 'Biographical' },
        { title: 'Drishyam', genre: 'Thriller' },
        { title: 'Haider', genre: 'Drama' },
        { title: 'Manjhi: The Mountain Man', genre: 'Biographical' },
        { title: 'Mary Kom', genre: 'Biographical' },
        { title: 'Neerja', genre: 'Biographical' },
        { title: 'Masaan', genre: 'Drama' },
        { title: 'Pink', genre: 'Drama' },
        { title: 'Gangs of Wasseypur', genre: 'Crime' },
        { title: 'Rockstar', genre: 'Romance' },
        { title: 'Highway', genre: 'Drama' },
        { title: 'Sultan', genre: 'Drama' },
        { title: 'Golmaal', genre: 'Comedy' },
        { title: 'Dhoom', genre: 'Action' },
        { title: 'Don', genre: 'Action' },
        { title: 'Krrish', genre: 'Sci-Fi' },
        { title: 'Baahubali: The Beginning', genre: 'Action' },
        { title: 'Baahubali: The Conclusion', genre: 'Action' },
        { title: 'Kahaani', genre: 'Thriller' },
        { title: 'Rang De Basanti', genre: 'Drama' },
        { title: 'Yeh Jawaani Hai Deewani', genre: 'Romance' },
        { title: 'Singham', genre: 'Action' },
        { title: 'Ek Tha Tiger', genre: 'Action' },
        { title: 'Tanu Weds Manu', genre: 'Comedy' },
        { title: 'Tanu Weds Manu Returns', genre: 'Comedy' },
        { title: 'Dil Se', genre: 'Romance' },
        { title: 'Om Shanti Om', genre: 'Romance' },
        { title: 'Rustom', genre: 'Thriller' },
        { title: 'Kaabil', genre: 'Thriller' },
        { title: 'Fan', genre: 'Thriller' },
        { title: 'Ghajini', genre: 'Action' },
        { title: 'Bajrangi Bhaijaan', genre: 'Drama' },
        { title: 'Ra.One', genre: 'Sci-Fi' },
        { title: 'Robot', genre: 'Sci-Fi' },
        { title: 'Ek Villain', genre: 'Thriller' },
        { title: 'Bang Bang!', genre: 'Action' },
        { title: 'Kick', genre: 'Action' },
        { title: 'Race', genre: 'Thriller' },
        { title: 'Saaho', genre: 'Action' },
        { title: 'War', genre: 'Action' },
        { title: 'Baazigar', genre: 'Thriller' },
        { title: 'Hum Dil De Chuke Sanam', genre: 'Romance' },
        { title: 'Devdas', genre: 'Romance' },
        { title: 'Kal Ho Naa Ho', genre: 'Romance' },
        { title: 'Kabir Singh', genre: 'Drama' },
        { title: 'Simmba', genre: 'Action' }
    ];

    // Filter movies based on the search query and selected genre
    const recommendations = movies.filter(movie => 
        (movie.title.toLowerCase().includes(query.toLowerCase())) &&
        (genre === '' || movie.genre === genre)
    );

    displayRecommendations(recommendations);
}

function displayRecommendations(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    if (movies.length === 0) {
        movieList.innerHTML = '<li>No movies found.</li>';
        return;
    }

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.genre})`;
        movieList.appendChild(li);
    });
}
