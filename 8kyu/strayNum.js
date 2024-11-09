// function stray(numbers) {
//   numbers.sort((a, b) => a - b);
//   return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
// }

// function stray(numbers) {
//  let arr =  numbers.filter(
//     (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
//   );
//   return arr[0]
// }
function stray(numbers) {
let arr =  numbers.filter(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );
  return arr[0]
}


