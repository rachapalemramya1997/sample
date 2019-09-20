var MathOperations;
(function (MathOperations) {
    var Circle;
    (function (Circle) {
        var PI = 3.144;
        function circumferenceOfCircle(radius) {
            console.log("The circumference of circle is " + 2 * PI * radius);
        }
        Circle.circumferenceOfCircle = circumferenceOfCircle;
        function areaOfCircle(radius) {
            console.log("The area of circle is " + PI * radius * radius);
        }
        Circle.areaOfCircle = areaOfCircle;
    })(Circle = MathOperations.Circle || (MathOperations.Circle = {}));
})(MathOperations || (MathOperations = {}));
//MathOperations.Circle.circumferenceOfCircle(23);
