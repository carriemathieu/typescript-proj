// export class Car {
//     year = 2000;
// }

// strict mode:
export class Car {
    year: number;

    constructor() {
        this.year = 10;
    }

    drive(speed: number) {
        console.log(`driving at ${speed}`);
    }
}

const myCar = new Car();
console.log(myCar.year);

