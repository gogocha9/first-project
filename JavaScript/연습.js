// 생성자
{
    function Item(title, price) {
        // this = {};
        this.title = title;
        this.price = price;
        this.showPrice = function() {
            console.log(`가격은 ${price}원 입니다.`);
        }
    
        // return this;
    }
    
    const item1 = new Item('인형', 3000);
    const item2 = new Item('가방', 4000);
    const item3 = new Item('지갑', 9000);
    
    console.log(item1, item2, item3);
    item3.showPrice();
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// 계산된 프로퍼티
{
    function makeObj(key, val) {
        return {
            [key] : val,
        };
    }
    
    const obj = makeObj("이름", 33);
    
    console.log(obj);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// 객체 메소드
// assign
{
    const user = {
        name: "Mike",
        age: 30,
    };
    
    const user2 = Object.assign({}, user);
    user2.name = "Tom";
    console.log(user);
    console.log(user2);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// key & values & entries
{
    const user = {
        name: "Mike",
        age: 30,
    };

    const key = Object.keys(user);
    const values = Object.values(user);
    console.log(`key: ${key}, values: ${values}`);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// fromEntries
{
    const user = {
        name: "Mike",
        age: 30,
    };

    let arr = [
        ['mon', '월'],
        ['tue', '화'],
    ]

    const entries = Object.entries(user);
    const fromEntries = Object.fromEntries(arr);
    console.log(`entries: ${entries}, fromEntries: ${fromEntries}`);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// symbol
{
    // 다른 개발자가 만들어 놓은 객체
    const user = {
        name: "Mike",
        age: 30,
    };

    // 내가 작업
    // user.showName = function() {};
    const showName = Symbol("show name");
    user[showName] = function() {
        console.log(this.name);
    }
    user[showName]();

    // 사용자가 접속하면 보는 메세지
    for(let key in user) {
        console.log(`His ${key} is ${user[key]}.`);
    }
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// String Methods
{
    // slice
    let list = [
        "01. 들어가며",
        "02. JS의 역사",
        "03. 자료형",
        "04. 함수",
        "05. 배열",
    ];

    let newList = [];

    for(let i = 0; i < list.length; i++) {
        newList.push(list[i].slice(4));
    }

    console.log(newList);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

{
     // indexOf
    // 금칙어 : 콜라
    function hasCola(str) {
        if(str.indexOf('콜라') > -1) {
            console.log('금칙어가 있습니다.');
        } else {
            console.log('통과')
        }
    }

    hasCola('와 사이다가 짱이야!');
    hasCola('콜라');
    hasCola('무슨 소리ㅡ 콜라가 짱!');
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

{
    // includes
    // 금칙어 : 콜라
    function hasCola(str) {
        if(str.includes("콜라")) {
            console.log('금칙어가 있습니다.');
        } else {
            console.log('통과')
        }
    }

    hasCola('와 사이다가 짱이야!');
    hasCola('콜라');
    hasCola('무슨 소리ㅡ 콜라가 짱!');
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// Array Methods
// splice & slice
{
    let arr = ["나는", "철수", "입니다"];
    arr.splice(1, 0, "대한민국", "소방관");
    console.log(arr);

    let str = arr.slice(1, 3);
    console.log(str);
    str = arr.slice();
    console.log(str);
    console.log(arr);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// concat
{
    let arr = [1, 2];
    console.log(arr.concat([3, 4], 5, 6));
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// forEach
{
    let arr = ["Mike", "Tom", "Jane"];
    arr.forEach((name, index) => {
        console.log(name);
        
    });
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// find / findIndex
{
    let userList = [
        {name: "Mike", age: 30},
        {name: "Jane", age: 27},
        {name: "Tom", age: 10},
    ];

    const result = userList.find((user) => {
        if(user.age < 19) {
            return true;
        }
        return false;
    });

    console.log(result);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// filter
{
    const arr = [1, 2, 3, 4, 5, 6];

    const result = arr.filter((item) => {
        return item % 2 === 0;
    });

    console.log(result);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// map
{
    let userList = [
        {name: "Mike", age: 30},
        {name: "Jane", age: 27},
        {name: "Tom", age: 10},
    ];

    let newUserList = userList.map((user, index) => {
        return Object.assign({}, user, {
            id: index + 1,
            isAdult: user.age > 19,
        });
    });

    console.log(newUserList);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// reduce
{
    let userList = [
        {name: "Mike", age: 30},
        {name: "Tom", age: 10},
        {name: "Jane", age: 27},
        {name: "Sue", age: 26},
        {name: "Harry", age: 43},
        {name: "Steve", age: 60},
    ];

    let result = userList.reduce((prev, cur) => {
        if(cur.age > 19) {
            prev.push(cur.name);
        }
        return prev;
    }, [])
    console.log(result);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// 구조 분해 할당
// 1
{
    let users = ['Mike', 'Tom', 'Jane'];
    let [user1, user2, user3] = users;

    // let user1 = users[0];
    // let user2 = users[1];
    // let user3 = users[2];

    console.log(user1);
    console.log(user2);
    console.log(user3);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}
// 2
{
    let str = "Mike-Tom-Jane";
    let [user1, user2, user3] = str.split('-');
    console.log(user1);
    console.log(user2);
    console.log(user3);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// 객체 구조 분해
{
    let user = {name: 'Mike', age: 30};
    let {name, age} = user;

    // let name = user.name;
    // let age = user.age;

    console.log(name);
    console.log(age);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// 나머지 매개변수
{
    function add(...numbers) {
        let result = numbers.reduce((p, c) => p + c, 0);
        console.log(result);
    }

    add(1, 2, 3);
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

{
    function User(name, age, ...skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }

    const user1 = new User('Mike', 30, "html", "css");
    const user2 = new User('Tom', 20, "js", "react");
    const user3 = new User('Jane', 10, "English");

    console.log(user1);
    console.log(user2);
    console.log(user3);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// 전개 구문
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    arr1 = [...arr2, ...arr1];

    console.log(arr1);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

{
    let user = {name: 'Mike'};
    let info = {age: 30};
    let fe = ["JS", "React"];
    let lang = ["Korean", "English"];

    // user = Object.assign({}, user, info, {
    //     skills: [],
    // });

    // fe.forEach(item => {
    //     user.skills.push(item);
    // })

    // lang.forEach(item => {
    //     user.skills.push(item);
    // })

    user = {
        ...user,
        ...info,
        skills : [...fe, ...lang],
    }

    console.log(user);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// call
{  
    const mike = {
        name: "Mike",
    };

    const tom = {
        name: "Tom",
    }

    function showThisName() {
        console.log(this.name);
    }

    function update(birthYear, occupation) {
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    update.call(mike, 1999, "singer");
    console.log(mike);

    update.call(tom, 2002, "tearcher");
    console.log(tom);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// apply
{
    const nums = [3, 10, 1, 6, 4];

    const minNum = Math.min.apply(null, nums);
    const maxNum = Math.max.apply(null, nums);

    console.log(minNum);
    console.log(maxNum);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// this
{
    const mike = {
        name: "Mike",
    };

    function update(birthYear, occupation) {
        this.birthYear = birthYear;
        this.occupation = occupation;
    }

    const updateMike = update.bind(mike);

    updateMike(1980, "police");
    console.log(mike);
    console.log("---------------------------------------------------------------------------------------------------------------------------------------");
}

// Prototype
{
    const car = {
        wheels: 4,
        drive() {
            console.log("drive..");
        },
    };

    const bmw = {
        color: "red",
        navigation: 1,
    };

    const benz = {
        color: "black",
    }

    const audi = {
        color: "blue",
    }

    bmw.__proto__ = car;
    benz.__proto__ = car;
    audi.__proto__ = car;
}

// Generator
{
    function* fn() {
        const num1 = yield "첫번째 숫자를 입력해주세요";
        console.log(num1);
        
        const num2 = yield "두번째 숫자를 입력해주세요";
        console.log(num2);

        return num1 + num2
    }

    const a = fn();
}