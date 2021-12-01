// keyof
{
    interface User {
        id: number;
        name: string;
        age: number;
        gender: "m" | "f";
    }

    type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

    const uk:UserKey = "gender";
}

// partial<T>
{
    interface User {
        id: number;
        name: string;
        age: number;
        gender: "m" | "f";
    }

    let admin: Partial<User> = {
        id: 1,
        name: "Bob",
    }
}

// Required<T>
{
    interface User {
        id: number;
        name: string;
        age?: number;
    }

    let admin: Required<User> = {
        id: 1,
        name: "Bob",
        age: 30,
    }
}

// Readonly<T>
{
    interface User {
        id: number;
        name: string;
        age?: number;
    }

    let admin: Readonly<User> = {
        id: 1,
        name: "Bob",
    };

    // admin.id = 4; x

}

// Record<K, T> - ex_01
{
    type Grade = "1" | "2" | "3" | "4";
    type Score = "A" | "B" | "C" | "D" | "F";

    const score: Record< Grade , Score > = {
        1: "A",
        2: "C",
        3: "B",
        4: "D",
    }
}

// Record<K, T> - ex_02
{
    interface User {
        id: number;
        name: string;
        age: number;
    }

    function isValid(user:User) {
        const result: Record<keyof User, boolean> = {
            id : user.id > 0,
            name : user.name !== '',
            age : user.age > 0
        }

        return result;
    }
}

// Pick<T, K>
{
    interface User {
        id: number,
        name: string;
        age: number;
        gender: "M" | "W";
    }

    const admin: Pick<User, "id" | "name"> = {
        id: 0,
        name: "Bob",
    };
}

// Omit<T, K>
{
    interface User {
        id: number,
        name: string;
        age: number;
        gender: "M" | "W";
    }

    const admin: Omit<User, "age" | "gender"> = {
        id: 0,
        name: "Bob",
    };
}

// Exclude<T1, T2>
{
    type T1 = string | number | boolean;
    type T2 = Exclude<T1, number | string>;
}

// NonNullable<Type>
{
    type T1 = string | null | undefined | void;
    type T2 = NonNullable<T1>;
}