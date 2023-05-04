const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 50];
const sprite: Drink = ['clear', true, 30];

// Tuples are harder to understand than objects
const carsSpecs: [number, number] = [400, 3354];

const carStats = {
  horspower: 400,
  weight: 3354,
};
