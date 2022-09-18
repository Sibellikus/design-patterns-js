// Prototype - cloning
//Basic example of inheritance
class Animal {}
class Dog extends Animal {}
// Let's make our prototype
const zombie = {
    eatBrains() {
        return 'yum yum';
    }
}

const chad = Object.create(zombie, { name: { value: 'chad'} });

console.log(chad)
// Even it's not obvious lintering JS will go up to prototype shape until 
//it reaches the root searching proprties and methods
chad.eatBrains();
Object.getPrototypeOf(chad);

// Bad practice
Array.prototype.bad = function() => {
    console.log('bad practice')
}