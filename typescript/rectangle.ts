namespace rectangleOperations{
    export namespace rectangle{
        export function area(length: number,breadth: number){
            console.log("Area of rectangle is " + length*breadth);
        }
        export function perimeter(length: number,breadth: number){
            console.log("perimeter of rectangle is " + 2*(length+breadth));
        }
    }
}
rectangleOperations.rectangle.area(4,6);