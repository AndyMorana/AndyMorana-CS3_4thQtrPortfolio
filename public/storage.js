const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

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


document.getElementById("movieForm").addEventListener("submit", function(e){

    e.preventDefault();

    const movie = {

        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        genre: document.getElementById("genre").value,
        rating: document.getElementById("rating").value

    };

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();

    this.reset();

});


function displayMovies(){

    const movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies.forEach(movie => {

        const card = document.createElement("div");
        card.classList.add("movieCard");

        const stars = "★".repeat(movie.rating);

        card.innerHTML = `
        <div class="movieTitle">${movie.title} (${movie.year})</div>
        <div>Genre: ${movie.genre}</div>
        <div class="movieStars">${stars}</div>
        `;

        movieList.appendChild(card);

    });

}

displayMovies();