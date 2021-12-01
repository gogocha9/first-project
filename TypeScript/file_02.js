{
    var age = 30;
    var isAdult = true;
    var a = [1, 2, 3];
    var a2 = [1, 2, 3];
    var week1 = ['mon', 'tue', 'wed'];
    var week2 = ['mon', 'tue', 'wed'];
}
// 튜플 
{
    var b = void 0;
    b = ['z', 1];
    // b = [1,'z']; x
    b[0].toLowerCase();
    // b[1].toLowerCase(); x
}
// void, never
{
    function sayHello() {
        console.log('hello');
    }
    function showError() {
        throw new Error();
    }
    function infLoop() {
        while (true) {
            // do shomething
        }
    }
}
// enum
{
    var Os = void 0;
    (function (Os) {
        Os[Os["Window"] = 3] = "Window";
        Os[Os["Ios"] = 10] = "Ios";
        Os[Os["Android"] = 11] = "Android"; // 11
    })(Os || (Os = {}));
    var myOs = void 0;
    myOs = Os.Window;
}
// null, undefined
{
    var a = null;
    var b = undefined;
}
