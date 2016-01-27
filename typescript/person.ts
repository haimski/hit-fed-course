/**
 * Created by haimb on 1/13/2016.
 */
class Person
{
    constructor(private name:string, private id:number) {}
    details()
    {
        return this.name+" "+this.id;
    }
}
var ob = new Person("jojo",2234);
document.write("person details are "+ob.details());