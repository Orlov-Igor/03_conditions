var userYears = prompt('Сколько вам лет?', '');

var remainderTen = Number(userYears) % 10;
var remainderHund = Number(userYears) % 100;

if (remainderTen === 1 && remainderHund !== 11){
  alert('Вам ' + userYears + ' год');
  }
else if (remainderTen > 1 && remainderTen < 5 && remainderHund !== 12 && remainderHund !== 13 && remainderHund !== 14){
  alert('Вам ' + userYears + ' года');
  }

else {
  alert('Вам ' + userYears + ' лет');
  }