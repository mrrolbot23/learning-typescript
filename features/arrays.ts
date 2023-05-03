// type inference can detect the array type
const dates = [new Date(), new Date()];
const carMakers = ['ford', 'toyo', 'chevy'];

// use type annotation when declaring an empty array
const carModels: string[] = [];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
// type annotation for 2D arrays (array of awrrays)
const sampleArray: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2025-12-1');
importantDates.push(new Date());
