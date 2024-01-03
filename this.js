const movie = {
    title : "The Avengers",
    year: 2012,
    genre: "Action , Sci fi , Thriller",
    cast : {
        main_lead : "Robert Downey Jr.",
        others: "Chris Evans"
    },

    getDetails(){
        console.log(`
        Title: ${this.title}\n
        Year:${this.year}\n
        Genre:${this.genre}\n
        Main Cast:${this.cast.main_lead}
        `);
    },

    getMovieYear: function(detail){
        console.log(movie[detail]);
    }
}

// console.log(movie.title);
movie.getDetails();