"use strict";
console.log("hello world!");
let age = 33;
if (age < 40)
    age += 5;
let sales = 123456789;
let stringVar = 'I am string';
let is_bool = true;
console.log(sales);
console.log(stringVar);
console.log(is_bool);
function render(document) {
    console.log(document);
}
render(is_bool);
let numbers = [1, 2, 3];
let user = [1, "Alex Kang"];
console.log(user[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
console.log(Size.Medium);
function addByFive(num) {
    console.log(num + 5);
}
function calculateTax(income) {
    if (income > 50000)
        return income * 1.2;
    return income * 1.3;
}
function defaultValues(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let student = {
    id: 1,
    name: "Alex",
    graduate: (date) => {
        console.log(date);
    }
};
console.log(student);
let typedStudent = {
    id: 1,
    name: "Alex",
    graduate: (date) => {
        console.log(date);
    }
};
console.log(typedStudent);
function feetToInches(length) {
    if (typeof length === 'number') {
        return length * 4;
    }
    else {
        return parseInt(length) * 4;
    }
}
feetToInches(10);
feetToInches('10 ft');
let weight;
let qty = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("name does not exist!");
}
function getStudentRegisterDate(id) {
    return id === 0 ? null : { registeredDate: new Date() };
}
let newStudent = getStudentRegisterDate(0);
if (newStudent != null && newStudent != undefined)
    console.log(newStudent.registeredDate);
console.log(newStudent === null || newStudent === void 0 ? void 0 : newStudent.registeredDate);
//# sourceMappingURL=Beginner_DEMO.js.map