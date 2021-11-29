// 필요한 이유.
// 일반 javascript 보다 더욱 견고하게 만들 수 있다.
function add(num1:number, num2:number) {
    console.log(num1 + num2);
}

// add();
// add(1);
add(1,2); // o
// add(3,4,5);
// add("hello", "world"); x

// function
function showItems(arr:number[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}

showItems([1,2,3]);
// showItems(1,2,3);