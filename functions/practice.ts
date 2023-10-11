const twoFer = (person: string = "you"):string => {
    return `"One for ${person}, one for me."`
}

const towFer1 = twoFer();
const twoFer2 = twoFer("Edwin")


console.log(towFer1);
console.log(twoFer2);


const isLeapYear = (year: number):boolean => {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
     else {
        return false;
    }
}

const leapYear = isLeapYear(2013);

console.log(`The year is a leap year: ${leapYear}`)