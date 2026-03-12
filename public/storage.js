const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

/*For the star rating*/

stars.forEach(star => {

    star.addEventListener("click", function(){

        const value = this.dataset.value;
        ratingInput.value = value;

        stars.forEach(s => s.classList.remove("active"));

        for(let i=0;i<value;i++){
            stars[i].classList.add("active");
        }

    });

});


/*For the form submission*/

document.getElementById("movieForm").addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;
    const rating = Number(document.getElementById("rating").value);

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    /*For checking if the movie is already there*/
    const existingMovieIndex = movies.findIndex(
        movie => movie.title.toLowerCase() === title.toLowerCase()
    );

    if(existingMovieIndex !== -1){

        /*For updating a movie that is already there*/

        let existingMovie = movies[existingMovieIndex];

        let newAverage = Math.round(
            (existingMovie.rating + rating) / 2
        );

        existingMovie.year = year;
        existingMovie.genre = genre;
        existingMovie.rating = newAverage;

        movies[existingMovieIndex] = existingMovie;

    }else{

        /*For adding a new movie*/

        const movie = {
            title,
            year,
            genre,
            rating
        };

        movies.push(movie);

    }

    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();

    this.reset();

    stars.forEach(s => s.classList.remove("active"));
});


/*For displaying movies*/

function displayMovies(){

    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies.forEach((movie, index) => {

        const card = document.createElement("div");
        card.classList.add("movieCard");

        const stars = "★".repeat(movie.rating);

        card.innerHTML = `
            <div class="movieInfo">
                <span class="movieTitle">${movie.title} (${movie.year})</span>
                <span>- ${movie.genre},</span>
                <span>Rating:</span>
                <span class="movieStars">${stars}</span>
            </div>
        `;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function(){

            const confirmDelete = confirm("Are you sure you want to delete this movie?");

            if(confirmDelete){

                let movies = JSON.parse(localStorage.getItem("movies")) || [];
                movies.splice(index,1);

                localStorage.setItem("movies", JSON.stringify(movies));

                displayMovies();
            }

        });

        card.appendChild(deleteBtn);
        movieList.appendChild(card);

    });

}


/*For movie deletion*/

function deleteMovie(index){

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    const confirmDelete = confirm("Are you sure you want to delete this movie?");

    if(confirmDelete){

        movies.splice(index,1);

        localStorage.setItem("movies", JSON.stringify(movies));

        displayMovies();

    }

}


/*For the initial load*/

displayMovies();

