// function
{
    function hello(age, name) {
        if (age !== undefined) {
            return "Hello, ".concat(name, ". You are ").concat(age, ".");
        }
        else {
            return "Hello, ".concat(name);
        }
    }
    console.log(hello(30, "Sam"));
    console.log(hello(undefined, "Sam"));
}
{
    function add2() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (result, num) { return result + num; }, 0);
    }
    // add(1,2,3); // 6
    // add(1,2,3,4,5,6,7,8,9,10); //55
}
// this
{
    var Sam = { name: 'Sam' };
    function showName(age, gender) {
        console.log(this.name, age, gender);
    }
    var a = showName.bind(Sam);
    a(30, 'm');
}
{
    function join(name, age) {
        if (typeof age === "number") {
            return {
                name: name,
                age: age,
            };
        }
        else {
            return "나이는 숫자로 입력해주세요.";
        }
    }
    var sam = join("Sam", 30);
    var jane = join("Jane", "30");
}
