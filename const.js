//old school
function movie(title, year){
    const movieObj = {
        title : title,
        year : year,
        getDetails(){
            console.log(`
                      Title: ${this.title}\n
                      Year: ${this.year}
                       
            `);
        }
    }

    return movieObj;
}


const movie1 = movie("Avenger" , 2012);
console.log(movie1);

//constructor function 

function Movie(title, year){
    this.title = title;
    this.year = year;
    this.getDetails = function(){
        console.log(`
                      Title: ${this.title}\n
                      Year: ${this.year}
                       
            `);
    }
}


const movie2 = new Movie("Iron Man" ,2007);
console.log(movie2);