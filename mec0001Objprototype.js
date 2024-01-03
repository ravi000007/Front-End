const car ={
    year: 2000,
    getDetails(name){
        console.log(`Your car name is ${name}`)
    }
}

// console.log(car);
const car1 = Object.create(car);
console.log(car1.getDetails, car1.year)
// car1.getDetails("Audi");

//Object.assign

const car2 = Object.assign(car);

console.log(car2.getDetails('BMW'),car2.name);