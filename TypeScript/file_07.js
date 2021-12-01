// Generic
{
    function getSize(arr) {
        return arr.length;
    }
    var arr1 = [1, 2, 3];
    getSize(arr1); // 3
    var arr2 = ["a", "b", "c"];
    getSize(arr2);
    var arr3 = [false, true, true];
    getSize(arr3);
    var arr4 = [{}, {}, { name: "Tim" }];
    getSize(arr4);
}
{
    var m1 = {
        name: "s21",
        price: 1000,
        option: {
            coupon: false,
        },
    };
    var m2 = {
        name: "s21",
        price: 1000,
        option: {
            color: "red",
            coupon: false,
        },
    };
    var m3 = {
        name: "s20",
        price: 900,
        option: "good",
    };
}
{
    var user = { name: "a", age: 10 };
    var car = { name: "a", color: "red" };
    var book = { price: 3000 };
    function showName(data) {
        return data.name;
    }
    showName(user);
    showName(car);
    // showName(book); x
}
