const add = (a: number, b: number) => {
  return a + b;
};

// we will always use type annotation for "return" statement
const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// use "void" when the function does not return anything
const logger = (message: string): void => {
  console.log(message);
};

const throwErr = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forcast: { date: Date; weather: string }): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
};

// using destructuring
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
