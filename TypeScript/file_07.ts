// Generic
{
    function getSize<T>(arr: T[]): number {
        return arr.length;
    }

    const arr1 = [1,2,3];
    getSize<number | string>(arr1); // 3

    const arr2 = ["a","b","c"];
    getSize<string>(arr2);

    const arr3 = [false, true, true];
    getSize<boolean>(arr3);

    const arr4 = [{},{},{name: "Tim"}];
    getSize<object>(arr4);
}

{
    interface Mobile<T> {
        name: string;
        price: number;
        option: T;
    }

    const m1:Mobile<object> = {
        name: "s21",
        price: 1000,
        option: {
            coupon: false,
        },
    };

    const m2:Mobile<{color: string; coupon: boolean}> = {
        name: "s21",
        price: 1000,
        option: {
            color: "red",
            coupon: false,
        },
    };

    const m3:Mobile<string> = {
        name: "s20",
        price: 900,
        option: "good",
    };
}

{
    interface User {
        name: string;
        age: number;
    }

    interface Car {
        name: string;
        color: string;
    }

    interface Book {
        price: number;
    }

    const user: User = { name: "a", age: 10 };
    const car: Car = { name: "a", color: "red" };
    const book: Book = { price: 3000 };

    function showName< T extends { name: string } >(data:T): string {
        return data.name;
    }

    showName(user);
    showName(car);
    // showName(book); x
}