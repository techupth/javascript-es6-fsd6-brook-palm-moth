// Exercise #6: Nullish Coalescing
let height = undefined;
let result;
function checkType(height) {
  return height ?? "Height is not defined";
}
result = checkType(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
