var words = ["ground", "control", "to", "major", "tom"];

function map(items, transformer) { //[6, 7, 2, 5, 3];
  var output = [];
  items.forEach(function(item) {
    output.push(transformer(item));
  });
  return output;
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) { //[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join(''); //[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
}));






// var nums = [3,4,7,32,1];

// console.log(map(nums, square));

// function square(num){
//   return num * num;
// }

// function timesByThree(num) {
//   return num * 3;
// }

// function divideByTwo(num) {
//   return num / 2;
// }

// function map(items, transformer){
//   var output = [];
//   items.forEach(function(item){
//     output.push(transformer(item));
//   });
//   return output
// }

