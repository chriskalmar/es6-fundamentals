import { printSeparator } from './utils';

// before es6
var city = 'Vienna';
console.log(city);

var city = 'Rome';
console.log(city);

if (true) {
  var city = 'London';
  console.log(city);
}

console.log(city);

printSeparator();

// with es6
let country = 'Austria';
console.log(country);

country = 'Italy';
console.log(country);

if (true) {
  let country = 'India';
  console.log(country);
}

console.log(country);

printSeparator();

const continent = 'Europe';
console.log(continent);

if (true) {
  const continent = 'Asia';
  console.log(continent);
}
