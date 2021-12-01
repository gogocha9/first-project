var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Car = /** @class */ (function () {
        // color: string;
        function Car(color) {
            this.color = color;
            this.color = color;
        }
        Car.prototype.start = function () {
            console.log("start");
        };
        return Car;
    }());
    var bmw = new Car("red");
}
// 접근 제한자(Access modifier) - public, private, protected
/*
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서 접근 가능
private & # - 해당 클래스 내부에서만 접근 가능
*/
{
    var Car_1 = /** @class */ (function () {
        function Car(color, name) {
            this.name = "car";
            this.color = color;
            this.name = name;
        }
        Car.prototype.start = function () {
            console.log("start");
            console.log(this.name);
            console.log(Car.wheels);
        };
        Car.wheels = 4;
        return Car;
    }());
    var Bmw = /** @class */ (function (_super) {
        __extends(Bmw, _super);
        function Bmw(color, name) {
            return _super.call(this, color, name) || this;
        }
        Bmw.prototype.showName = function () {
            console.log(this.name);
        };
        return Bmw;
    }(Car_1));
    var z4 = new Bmw("black", "zzzz4");
    console.log(Car_1.wheels);
}
// 추상 class
{
    var Car = /** @class */ (function () {
        function Car(color) {
            this.color = color;
        }
        Car.prototype.start = function () {
            console.log("start");
        };
        return Car;
    }());
    // const car = new Car("red");
    var Bmw = /** @class */ (function (_super) {
        __extends(Bmw, _super);
        function Bmw(color) {
            return _super.call(this, color) || this;
        }
        Bmw.prototype.doSomething = function () {
            alert(3);
        };
        return Bmw;
    }(Car));
    var z4 = new Bmw("black");
}
