const square = (num: number) => {
  return num * num;
};

const greeting = (person: string = "Stranger") => {
  console.log(`Hello ${person}!`);
};

const doSomething = (person: string, age: number, isFunny: boolean) => {
  console.log(`${person} is ${age}. Is funny? ${isFunny}`);
};

greeting(); //this one uses default value of "Stranger"

greeting("Edwin");

console.log(square(4));

doSomething("Ediwn", 32, true);

const addNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(addNumbers(13, 45));

const colors = ["red", "white", "green", "blue"];

colors.map(color => {
    return color.toUpperCase()
    
})
