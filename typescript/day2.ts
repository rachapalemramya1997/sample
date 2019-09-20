// interface Student{
//     name: string ;
//     age: number;
//     printDetails(): void;
// }
// class Person implements Student{
//     name  = 'Ramya';
//     Age = 23;
//     printDetails(){
//         console.log("name is "+ this.name+' age is '+this.age);
//     }
// }
// let Person1 = new Person();
// person1.printDetails();
 
// let Student1: student = {
//     name: 'xys',
//     age: 23,
//     printDetails :()=>{
//         console.log("name is"+Student1.name + ' age is ' + Student1.age);
//     } 
// } 
function getArray<p>(items:p[]):p[]{
    return new Array<p>().concat(items);
}
let strArray= getArray<string>(['grd','hgf','htr']);
let numArray= getArray<number>([1234,4567,7654]);
numArray.push(23);