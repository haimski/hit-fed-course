/**
 * Created by haimb on 1/13/2016.
 */
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
})();
var ob = new Rectangle(3, 4);
document.write("area is " + ob.area());
//# sourceMappingURL=helloworld.js.map