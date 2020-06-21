var userYears = prompt('Сколько вам лет?', '');

if (Number(userYears) % 10 === 1 && Number(userYears) !== 11){
  alert('Вам ' + userYears + ' год');
  }
else if (Number(userYears) % 10 === 2 && Number(userYears) !== 12){
  alert('Вам ' + userYears + ' года');
  }
else if (Number(userYears) % 10 === 3 && Number(userYears) !== 13){
  alert('Вам ' + userYears + ' года');
  }
else if (Number(userYears) % 10 === 4 && Number(userYears) !== 14){
  alert('Вам ' + userYears + ' года');
  }
else {
  alert('Вам ' + userYears + ' лет');
  }