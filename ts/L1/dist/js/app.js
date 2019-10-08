"use strict";
var a = 100;
console.log(a);
var str = "string";
console.log(str);
// str = 20;
str = "Test";
var num = 10;
var bool = true;
var any = 'Test';
any = 123;
var any2 = 10;
//------------------------------------>
var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//tuples
var arr = ["Hello", 12, 'Test'];
//------------------------------------>
function plus(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 2; }
    return a + b;
}
var result = plus(10, 20);
var result2 = plus();
console.log(result);
console.log(result2);
var newFunc;
newFunc = plus;
var result3 = newFunc(40, 50);
console.log(result3);
function Show(str) {
    console.log(str);
}
Show('Some text');
var person1 = {
    name: "Sam",
    surname: "Jackson",
    age: 24,
    ShowInfo: function () {
        console.log("Name: " + this.name + "\nSurname: " + this.surname + "\nAge: " + this.age);
    },
    changeAge: function (age) {
        this.age = age;
    }
};
person1.ShowInfo();
person1.changeAge(34);
person1.ShowInfo();
//# sourceMappingURL=app.js.map