interface Isome {
  name: string;
  age: number;
}

// -------------------------
// .
// .
// INTERFACE WITH CLASS
// .
// .
// -------------------------
interface Animal {
  name: string;
  makeSound(): void; // Method signature, no implementation
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name);
myDog.makeSound();

// Example: Multiple Interfaces
interface HasLegs {
  numberOfLegs: number;
}

interface CanRun {
  run(): void;
}

class Cat implements HasLegs, CanRun {
  numberOfLegs = 4;

  run(): void {
    console.log("The cat is running.");
  }
}

// -------------------------
// .
// .
// ABSTRACT CLASS
// .
// .
// -------------------------

abstract class Vehicle {
  abstract startEngine(): void; // Abstract method (must be implemented)

  stopEngine(): void {
    // Concrete method (already implemented)
    console.log("Engine stopped.");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started.");
  }
}

const myCar = new Car();
myCar.startEngine(); // "Car engine started."
myCar.stopEngine(); // "Engine stopped."
