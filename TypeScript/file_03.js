{
    var user = {
        name: 'xx',
        age: 30,
        birthYear: 2000,
        1: 'A',
        2: 'B',
    };
    user.age = 10;
    user.gender = "male";
    // user.birthYear = 1900; x
    console.log(user.age);
}
{
    var add_1 = function (x, y) {
        return x + y;
    };
    add_1(10, 20);
}
{
    var a = function (age) {
        return age > 19;
    };
    a(33); // true
}
// implements
{
    var Bmw = /** @class */ (function () {
        function Bmw(c) {
            this.wheels = 4;
            this.color = c;
        }
        Bmw.prototype.start = function () {
            console.log('go..');
        };
        return Bmw;
    }());
    var b = new Bmw('green');
    console.log(b);
    b.start();
}
// extends
{
}
