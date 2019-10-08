const a = 100;
console.log(a);

let str: string = "string";

console.log(str);
// str = 20;
str = "Test";

let num : number = 10;

let bool: boolean = true;

let any: any = 'Test';

any = 123;

let any2 : string|number = 10;

//------------------------------------>

let arrNumber : number[] = [1,2,3,4,5,6,7,8,9,0];


//tuples
let arr :[string,number,string]  = ["Hello", 12, 'Test'];

//let any: any = "Test";

//------------------------------------>
function plus(a:number = 2,b:number = 2):number{
    return a+b;
}

let result: number = plus(10,20);
let result2: number = plus();
console.log(result);
console.log(result2);

let newFunc:(num1:number, num2:number) => number;

newFunc = plus;

let result3 = newFunc(40, 50);
console.log(result3);

function Show(str: string):void{
    console.log(str);
}

Show('Some text');
//------------------------------------>

type Person = {name: string, surname: string, age:number, ShowInfo: ()=> void, changeAge: (age:number)=> void};

let person1: Person = {
    name: "Sam",
    surname: "Jackson",
    age: 24,
    ShowInfo():void{
        console.log(`Name: ${this.name}\nSurname: ${this.surname}\nAge: ${this.age}`);
    },
    changeAge(age: number):void{
        this.age = age;
    }
};

person1.ShowInfo();
person1.changeAge(34);
person1.ShowInfo();