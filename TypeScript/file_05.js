// Literal Types 리터럴 타입
{
    var userName1 = "Bob";
    var userName2 = "Tom";
    userName2 = 3;
    var user = {
        name: "Bob",
        job: "developer"
    };
}
// Union Types 유니온 타입
{
    function getGift(gift) {
        console.log(gift.color);
        if (gift.name === "car") {
            gift.start();
        }
        else {
            gift.call();
        }
    }
}
// Intersection Types 교차타입
{
    var toyCar = {
        name: "타요",
        start: function () { },
        color: "blue",
        price: 1000,
    };
}
