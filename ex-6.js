let height = undefined;
let result;

function check () {
    result = height ?? "Height is not defined"
}

check()

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

