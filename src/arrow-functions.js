import { printSeparator } from './utils';

const list = [1, 3, 7, 8, 12, 17, 23, 40, 99, 100];

// before es6
{
  function add(a, b) {
    return a + b;
  }

  console.log('a:', add(5, 6));

  function getOddNumbers(list) {
    return list.filter(function (number) {
      return number % 2 > 0;
    });
  }

  console.log('b:', getOddNumbers(list));

  function calculator(a, b) {
    return {
      '+': a + b,
      '-': a - b,
      '*': a * b,
      '/': a / b,
    };
  }

  console.log('c:', calculator(10, 2));
}
printSeparator();

{
  {
    const add = (a, b) => {
      return a + b;
    };

    console.log('d:', add(5, 6));
  }

  {
    const add = (a, b) => a + b;

    console.log('e:', add(5, 6));
  }

  {
    const getOddNumbers = (list) => {
      return list.filter((number) => {
        return number % 2 > 0;
      });
    };

    console.log('f:', getOddNumbers(list));
  }

  {
    const getOddNumbers = (list) => {
      return list.filter((number) => number % 2 > 0);
    };

    console.log('g:', getOddNumbers(list));
  }

  {
    const getOddNumbers = (list) => list.filter((number) => number % 2 > 0);

    console.log('h:', getOddNumbers(list));
  }

  {
    const isOdd = (number) => number % 2 > 0;
    const getOddNumbers = (list) => list.filter(isOdd);

    console.log('i:', getOddNumbers(list));
  }

  {
    const calculator = (a, b) => ({
      '+': a + b,
      '-': a - b,
      '*': a * b,
      '/': a / b,
    });

    console.log('j:', calculator(10, 2));
  }
}
