function Movie(title){
  this.title = title;

//   this.getMovieDetails = function(){
//     console.log(`Title: ${this.title}`);
//   };
}

const movie1 = new Movie("Godzilla");

// console.log(movie1.__proto__);
// console.log(movie1.__proto__.__proto__);
// console.log(Object.getPrototypeOf(movie1));

// console.log(movie1);
// console.log(movie1.getMovieDetails());

//Now we have defined function getMovieDetails() in the constructor function but when we create more tha 100 ,1000
// object then it will slow the performace so we can 
//Use the prototype to add getMovieDetails() 

Movie.prototype.getMovieDetails = function () { //this method is not copy to object it is inherited only
        console.log(`Title: ${this.title}`);
};
Movie.prototype.year = 2012;

console.log(movie1.getMovieDetails());
console.log(movie1.year);


const player = {
  name : "Hunter"
}

console.log(player);

Object.prototype.age = 24;

console.log(player.age);

