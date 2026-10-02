//
// var result = 40+10;
// console.log(result);

// result += 50;
// console.log(result)

// result = Math.sqrt(result)
// console.log(result)

// var newresult = 2.427;
// console.log(newresult.toFixed(1));

//
// var text = 'Text';
// console.log(text.toLowerCase());

//
var names = ['name1', 'name2', 'name3'];
// console.log(names[1].toUpperCase());

// names[3] = 'name4'
// console.log(names[3])

// names.push('name5')
// console.log(names[4])
// console.log(names)

//
// if ('5' == 5 && 5 > 0 || names[2] != 'name3'){
//   console.log('Correct')
// };

// if (names[2] != 'name3') {
//   console.log('True')
// } else {
//   console.log('False')
// };

//

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// };

// for (var j = 0; j < names.length; j++) {
//   console.log(names[j]);
//   names[j] = 'j-name'
//   console.log(names)
// };

// var a = 0;
// while (a<10) {
//   console.log('Its not 10 yet, only', a);
//   a++
// };

// function test_function() {
//   console.log('Hello functions!')
// };

// test_function();

// var a = 10
// var b = 60
// function sum() {
//   var c = a+b;
//   return c
// };

// function multiplying(x, y) {
//   console.log(x * y)
// }

// console.log(sum());

// multiplying(10, 7)

//

var Object = {
  name: 'name1',
  surname: 'surname1',
  age: 25,
  FullName: function() {
    return this.name + " " + this.surname
  }
};

Object.name = "name2";
console.log(Object.name);
console.log(Object.FullName())