{
    let age: number = 30;
    let isAdult: boolean = true;
    let a: number[] = [1, 2, 3];
    let a2: Array<number> = [1, 2, 3];

    let week1: string[] = ['mon', 'tue', 'wed'];
    let week2: Array<string> = ['mon', 'tue', 'wed'];
}
// 튜플 
{
    let b: [string, number];
    b = ['z', 1];
    // b = [1,'z']; x

    b[0].toLowerCase();
    // b[1].toLowerCase(); x
}
// void, never
{
    function sayHello(): void {
        console.log('hello');
    }

    function showError(): never {
        throw new Error();
    }

    function infLoop(): never {
        while (true) {
            // do shomething
        }
    }
}
// enum
{
    enum Os {
        Window = 3,
        Ios = 10,
        Android // 11
    }

    let myOs: Os;

    myOs = Os.Window
}

// null, undefined
{
    let a: null = null;
    let b: undefined = undefined;
}