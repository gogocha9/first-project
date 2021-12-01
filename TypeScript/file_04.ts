// function
{
    function hello(age: number | undefined, name: string):string {
        if(age !== undefined) {
            return `Hello, ${name}. You are ${age}.`;
        } else {
            return `Hello, ${name}`;
        }
    }

    console.log(hello(30, "Sam"));
    console.log(hello(undefined, "Sam"));
}

{
    function add2(...nums:number[]) {
        return nums.reduce((result, num) => result + num, 0);
    }

    // add(1,2,3); // 6
    // add(1,2,3,4,5,6,7,8,9,10); //55
}

// this
{
    interface User {
        name: string;
    }

    const Sam: User = {name:'Sam'}

    function showName(this:User, age:number, gender:'m' | 'f') {      
        console.log(this.name, age, gender); 
    }

    const a = showName.bind(Sam);
    a(30, 'm');
}

{
    interface User {
        name: string;
        age: number;
    }

    function join(name: string, age: string): string;
    function join(name: string, age: number): User;
    function join(name: string, age: number | string): User | string {
        if(typeof age === "number") {
            return {
                name,
                age,
            };
        } else {
            return "나이는 숫자로 입력해주세요.";
        }
    }

    const sam: User = join("Sam", 30);
    const jane: string = join("Jane", "30");
}