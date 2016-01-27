/**
 * Created by haimb on 1/13/2016.
 */
var Person = (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.details = function () {
        return this.name + " " + this.id;
    };
    return Person;
})();
var ob = new Person("jojo", 2234);
document.write("person details are " + ob.details());
//# sourceMappingURL=person.js.map