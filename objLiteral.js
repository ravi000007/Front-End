const movie = {
    title : "The Avengers",
    year: 2012,
    genre: "Action , Sci fi , Thriller",
    cast : {
        main_lead : "Robert Downey Jr.",
        others: "Chris Evans"
    },

    getDetails : function(){
        console.log(`Title: ${movie.title}\nYear:${movie.year}\nGenre:${movie.genre}\nMain Cast:${movie.cast.main_lead}`);
    },

    getMovieYear: function(detail){
        console.log(movie[detail]);
    }
}

// console.log(movie.title);
movie.getDetails();
const detail = movie.getMovieYear("year");