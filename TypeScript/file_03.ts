{
    type Score = 'A' | 'B' | 'C' | 'F';

    interface User {
        name: string;
        age: number;
        gender?: string;
        readonly birthYear: number;
        [grade: number]: Score;
    }

    let user: User = {
        name: 'xx',
        age: 30,
        birthYear: 2000,
        1: 'A',
        2: 'B',
    }

    user.age = 10;
    user.gender = "male";
    // user.birthYear = 1900; x

    console.log(user.age)
}

{
    interface Add {
        (num1: number, num2: number): number;
    }

    const add: Add = function (x, y) {
        return x + y;
    }

    add(10, 20);
}

{
    interface IsAdult {
        (age: number): boolean;
    }

    const a: IsAdult = (age) => {
        return age > 19;
    }

    a(33) // true
}

// implements
{
    interface Car {
        color: string;
        wheels: number;
        start(): void;
    }

    class Bmw implements Car {
        color;
        wheels = 4;

        constructor(c: string) {
            this.color = c;
        }

        start() {
            console.log('go..')
        }
    }

    const b = new Bmw('green');
    console.log(b);
    b.start();
}

// extends
{
    interface Car {
        color: string;
        wheels: number;
        start(): void;
    }

    interface Toy {
        name: string;
    }

    interface ToyCar extends Car, Toy {
        price: number;
    }
}