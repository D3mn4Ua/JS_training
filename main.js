function sayhello(name) {
  console.log("Hello, ", name)
}

sayhello('John Pork')

function sum(...numbers) {
  var result = 0;
  for (var n of numbers) {
    result += n;
  };
  return result
};

console.log(sum(10, 5, 10, 60, 2));

function isRound(...numbers) {
  var result = []
  for (var n of numbers) {
    if (Number.isInteger(n) == true) {
      result.push(`Number: ${n} is round`)
    } else{
      result.push(`Number: ${n} is not round.`)
    }
  }
  console.log(result)
}

isRound(5, 10, 8.2, 0.1, 8, 3)