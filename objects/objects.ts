const dog = {
  name: "Trueno",
  breed: "Bully",
  age: 3,
};

const person = {
  first: "Edwin",
  last: "Roldan",
  age: 32
};

//function object type parameters example
const printName = (person: { first: string; last: string }): void => {
  console.log(`Your name is ${person.first} ${person.last}`);
};

printName(person); //you can pass the abject like this and it will read the object properties that match the function parameters
printName({ first: person.first, last: person.last }); //this is another option
printName({ first: "Juan", last: "Delpueblo" }); //option#3


//you can set object property types like this
let coodinates: {x: number, y: number} = {x: 34, y: 24};

//you can also declare the object type as the function return
const randomCoordinate = (): {x: number, y: number} => {
    return {x: Math.random(), y: Math.random()}
}

console.log(randomCoordinate())
