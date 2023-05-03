const profile = {
  name: 'alex',
  age: 20,
  coords: {
    latitude: 0,
    longitue: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { latitude, longitue },
}: { coords: { latitude: number; longitue: number } } = profile;
