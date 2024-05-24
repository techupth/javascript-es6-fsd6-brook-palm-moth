function sum(...result) {
  let summary = 0;
  for (let i=0; i<result.length; i++){
    summary =result[i] + summary
  }
  return summary
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
