/**
 * Created by haimb on 1/13/2016.
 */
class Rectangle
{
    constructor(private width:number, private height:number) {}
    area()
    {
        return this.width*this.height;
    }
}
var ob = new Rectangle(3,4);
document.write("area is "+ob.area());
