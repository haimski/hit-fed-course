/**
 * Created by haimb on 1/13/2016.
 */
var Circle = (function () {
    function Circle(width, height) {
        this.width = width;
        this.height = height;
    }
    Circle.prototype.area = function () {
        return this.width * this.height;
    };
    return Circle;
})();
var ob = new Circle(3, 4);
document.write("area is " + ob.area());
//# sourceMappingURL=circle.js.map