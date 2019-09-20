namespace MathOperations{
    export namespace Circle{
    const PI = 3.144;
    export function circumferenceOfCircle(radius: number){
        console.log("The circumference of circle is "+ 2*PI*radius);
    }
    export function areaOfCircle(radius: number){
        console.log("The area of circle is "+ PI*radius*radius);
    }
}}
//MathOperations.Circle.circumferenceOfCircle(23);