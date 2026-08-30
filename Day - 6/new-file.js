class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}
