console.log("object method file");

const person = {
  name: "Bob",
  age: 25,
  favouriteColor: "red",
  sayHello: function () {
    console.log("Hello");
  },
};

person.sayHello();

const person1 = {
  name: "Bob",
  age: 25,
  favouriteColor: "red",
  sayHello: function (name) {
    console.log("Hello" + name + "!");
  },
};

person1.sayHello("Alice");

const person2 = {
  name: "Bob",
  age: 25,
  favouriteColor: "red",
  getAge: function () {
    return this.age;
  },
};

const age = person2.getAge();

console.log(age);
