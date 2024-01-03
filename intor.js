//Constructor function 
function Vehicle(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function(){
        console.log(`The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels`);
    }
}

// const car = new Vehicle('Car','blue',4);
// car.getDetails();

//Classes In ES6JS

//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
function main(){
    //Implement your class here
    class Person{
        name;
        age;
        gender;
        
        constructor(name, age, gender){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        
        speak(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    
    class Student{
         person;
         major;
         gpa;
        
        constructor(person, major, gpa){
            this.person = person;
            this.major = major;
            this.gpa = gpa;
            
        }
        
        study(){
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}`);
        }
        
        speak(){
            console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} year old. I am also a student studying ${this.major}.`);
        }
    }
    
    const person1= new Person("john",20,"M");
    person1.speak();
    
    const stud1 = new Student({name:"john",age:20,gender:"M"},"CS" , 9);
    stud1.speak();
    stud1.study();
    
    return {Person,Student};
}


main();