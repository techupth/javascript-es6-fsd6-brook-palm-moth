function sum(...input) {
  // Start coding here !

  // Normal for loop
  //   let result = 0;
  //   for (let i = 0; i < input.length; i++) {
  //     result += input[i];
  //   }
  //   return result;
  // }

  //Built in
  return input.reduce((total, num) => total + num, 0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
