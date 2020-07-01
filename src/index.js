function plural(userAge) {
let remainderTen = userAge % 10;
let remainderHund = userAge % 100;

if (remainderTen === 1 && remainderHund !== 11){
  return (' год');
  }
else if (remainderTen > 1 && remainderTen < 5 && remainderHund !== 12 && remainderHund !== 13 && remainderHund !== 14){
  return (' года');
  }
else {
  return (' лет');
  }
}

// console.log(plural(16));

module.exports = { plural };
  // let age = +prompt('Сколько вам лет?');
  // plural(age);
