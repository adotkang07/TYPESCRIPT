console.log("hello world!");

let age: number = 33;

if(age < 40)
    age += 5;

//How to set variables with different types
let sales: number = 123_456_789
let stringVar: string = 'I am string'
let is_bool: boolean = true;

console.log(sales);
console.log(stringVar);
console.log(is_bool);

//function with parameter type boolean
function render(document: boolean) {
    console.log(document);
}

render(is_bool);

//number array
let numbers: number[] = [1,2,3];

//Tuples
let user: [number, string] = [1, "Alex Kang"];
console.log(user[1]);

//Enums
//By default the first value is always set to 0
enum Size { Small =  1, Medium = 2, Large = 3}
console.log(Size.Medium);

//Function with void return type
function addByFive(num: number): void {
     console.log(num + 5);
}

//Function with number return type
function calculateTax(income: number): number {
    if(income > 50_000)
        return income * 1.2;

    return income * 1.3;
}

//Functions with default values
function defaultValues(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
        return income * 1.2;

    return income * 1.3;
}

//working with objects
let student: {
    id: number,
    name: string
    telephoneNum?: number // optional property
    graduate: (date: Date) => void 
} = {
    id: 1, 
    name: "Alex",
    graduate:(date: Date) => {
        console.log(date);
    }
};


//type aliasing 
//Can be reused anywhere
type Student = {
    id: number,
    name: string
    telephoneNum?: number // optional property
    graduate: (date: Date) => void 
}

console.log(student);

let typedStudent: Student = {
    id: 1, 
    name: "Alex",
    graduate:(date: Date) => {
        console.log(date);
    }
}
console.log(typedStudent);

//Union types
function feetToInches(length: number | string): number {
    //Narrowing 
    if(typeof length === 'number') {
        return length * 4;
    } else {
        return parseInt(length) * 4;
    }


}

feetToInches(10);
feetToInches('10 ft')


//Intersection Type example
let weight: number & string;

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

//Literal types
//Literal (exact, specific)
type QTY = 50 | 100;
let qty: QTY = 100;

type Metric = 'cm' | 'inch';

//nullable types
function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else 
        console.log("name does not exist!");
}

//Chaining
type NewStudent = {
    registeredDate?: Date
};

function getStudentRegisterDate(id: number): NewStudent | null {
    return id === 0 ? null: {registeredDate: new Date()};
}

let newStudent = getStudentRegisterDate(0);

if(newStudent != null && newStudent != undefined)
    console.log(newStudent.registeredDate);

//Optional property access operator 
//Shorthand of the condition above
console.log(newStudent?.registeredDate?.getFullYear());

//Optional element access operator 
//customer?.[0]

//Optional call
let log: any = null;
log?.('a');