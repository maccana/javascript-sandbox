// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Each Person instance will have access to any function created on the parent object prototype
Person.prototype = {
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
}

var p1 = new Person("Brian", 31);
console.log("Hello, my name is " + p1.getName() + " and I am " + p1.getAge() + " years old.");
