//let myName:string = 'Ramya';
//alert(myName);
/*let myName: string[] = 'Ramya';
let company;
company = 'testyanthra';
company = 25;
console.log(company);
console.log(myName);*/
/*let sample : number | boolean;
sample = 10;
sample = true;
console.log(sample);

let myArray:string[] = ['erty','ertyf','ertyg'];
console.log(myArray);
let myTuple: [string, number, boolean] = ['', 123, true];*/
//enum is a keyword
/*enum colors {
    red = 'Danger', green = 'good', blue = 'primary', black = 'dark'
}
console.log(colors.black);*/
//class is a blueprint of a object
/*class Person{      //classes
name: string;      //we are not using any keywords like var,let,const
age: number;
constructor(public personName: string,public personAge: number){
//this.name = personName;
//this.age = personAge;
}

*/
/*class Person{
constructor(public personName: string,public personAge: number){
//this.name = personName;
//this.age = personAge;
}

}
let person = new Person('Ramya',21);
console.log(person.personAge);*/
// let myName = 'Ramya';
// myName = null;
/*class Car {
    brand: string = 'BMW';
    static model: string = 'x5';
}
let bmwCar = new Car();
console.log(bmwCar.brand);
console.log(bmwCar.model);*/
//by using constructer
/*class Car {
    constructor(public brand: string, public model: string){

    }
}
let bmwCar = new Car('BMW','x5');
console.log(bmwCar.brand);
console.log(bmwCar.model);

let benzCar: Car ={

    brand : 'Benz',
    model : '0002'
}*/
//inheritance
/*class Person {
    constructor(public name: string, public age:number){}
}
class Student extends Person{
    constructor(public myName: string, public myAge: number, public USB: number){
        super(myName,myAge);
    }
}
let person1 = new Person('Dinga',23);
let student1 = new Student('Dingi',22,45667);*/
// class Person{
//     constructor(public name: string,public age: number, public degree?: string){}
// }
// let person1: Person = {
//     name: 'ramya',
//     age : 23,
//     degree:'Engineering'
// }
/*function printConstructor(cons: Function){
    console.log(cons);
}
@printConstructor
class Sample {
    constructor(){
        console.log('hi hello i am sample class constructor');
    }
}*/
///<reference path="./circle.ts"/>
///<reference path="./rectangle.ts"/>
MathOperations.Circle.circumferenceOfCircle(23);
rectangleOperations.rectangle.area(4, 6);
