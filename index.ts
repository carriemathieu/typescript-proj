// "string" = type annotation
// const myName: string = 'Carrie';

import { isConstructorDeclaration } from "typescript";
import { Car } from "./car";

// myName will always be string - type inference
let myName = 'Carrie';

// string, number, boolean, any
// null, undefined - can only ever be assigned null or undefined

// const add = (a: number, b: number): number => {}
const add = (a: number, b: number) => {
    return a + b;
}

// **USE INTERFACE TO DESCRIBE STRUCTURE OF OBJECT**
interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}

// const post: { title: string, daysOld: number, published: boolean } = {...}
const post = {
    title: 'Typescript',
    daysOld: 10,
    published: true
};

// instead of (postToPrint: { title:string, daysOld:number, published:boolean })
const printPost = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`
};

//-------------------------------------------------------------//
// classes

class newCar {
    // instance of car will have color, year
    public color: string;
    // private - cannot access from outside of class. only class methods can access
    private year: number;
     
    // initializes properties to car
    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    // below accomplishes same as above
    // color = 'red';
    // year = 2000;

    drive() {
        console.log('Vroom')
    }
}

// new instance of Car class
const myCar = new newCar('red', 2000);
myCar.drive(); // -> Vroom

// // shortcut -> do not have to define in beginning of class, and do not have to assign within constructor
// constructor (public color: string, private year: number) {}

//-------------------------------------------------------------//
// decorators

// npx tsc --init -> creates tsconfig.json file
// changed in tsconfig file: "strict": false && uncomment experimental decorators section 

// decorator:
    // plain function
    // gets called when file first gets executed, not when instance of class created
    // can be applied to class, property, method, accessor, or argument of method
    // receives different arguments depending on where used
    // can be plain decorator or decorator factory
    // used to mess around with internals of clas s in clever ways
const Component = (target: any) => {
    console.log(target);
};

// @Component
// class Car {

// }

//-------------------------------------------------------------//
// modules

// import { Car } from './Car';

// const firstCar = new Car;

//-------------------------------------------------------------//
// interface vs. classes

interface Driveable {
    speed: number;
    // Driveable must have drive method,that returns string
    drive(): string;
}

// look at class car, make sure satisifies interface of driveable
class thirdCar implements Driveable { 
    speed = 10;

    drive() {
        return `I am driving at ${this.speed} mph`
    }
}

const myOtherCar = new thirdCar()

const startDriving = (vehicle: Driveable) => {
    vehicle.drive()
}

startDriving(myOtherCar)

//-------------------------------------------------------------//
// class generics

// class NumberHolder {
//     value: number;
// }

// class StringHolder {
//     value: string;
// }

// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

// const stringHolder = new StringHolder();
// stringHolder.value = 'sample string';

// **Generic Class**
// provides, on the fly, type to be used for value property
class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
}

const numberHolder = new ValueHolder<number>()

//-------------------------------------------------------------//
// function generics

// function return an array of numbers
const numberWrapper = (value: number): number[] => {
    return [value];
}

// T = value type
const valueWrapper = <T>(value: T): T[] => {
    return [value];
}

// takes 10, passes in number & type number, returns 10 as array
valueWrapper<number>(10); // type inference -> valueWrapper(10)
valueWrapper<boolean>(true); // type inference -> valueWrapper(true)
valueWrapper<string>('hi'); // type inference -> valueWrapper('hi')
