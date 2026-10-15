// let arr=["gayatri","varsha","archana","ashwini"];

// let arr2=[23,78,67,90];
//to access arr prototype
// arr.__proto__

// arr2.__proto__.push=(n)=>{
//     console.log("pushing a number: ",n);
// }
//to access prototype of an array
// Array.prototype

//to access prototype of an string
// String.prototype

//Factory Functions 
// function PersonMaker(name,age){
//     const Person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, My name is ${this.name}`);
//         },
//     };
//     return Person;
// }
// let p1=PersonMaker("Gayatri",19);
// let p2=PersonMaker("Arvind",73);

//using new operater and prototype keyword
// function Person(name,age){
    // this.name=name;
    // this.age=age;
    // console.log(this);
// }
// Person.prototype.talk=function(){
    // console.log(`Hi, My name is ${this.name}`);
// }
// 
// let p1= new Person("Gayatri",19);

//using classes
// class Person{
    // constructor(name,age){
        // this.name=name;
        // this.age=age;
    // }
    // talk(){
        // console.log(`Hello ,I am ${this.name}`);
    // }
// }
// let p1= new Person("Gayatri",19);

//Inheritance
class Person{
    constructor(name,age){
        console.log("person class construcrtor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hello there ,welocme to vs code`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);  //parent class constructor will called
        this.marks=marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher class constructor");
        super(name,age);  //parent class constructor will called
        this.subject=subject;
    }
}
