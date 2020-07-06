/* global require, test, expect */
const { plural } = require("./index");

test("Год", () => {
  for (index = 0; index <= 1000; index++ ) {
    if (index % 10 === 1 
      && index % 100 !== 11){
      expect(plural(index)).toBe(" год");
    }
  }
});

test("Года", () => {
  for (index = 0; index <= 1000; index++ ) {
    if (index % 10 > 1 
      && index % 10 < 5 
      && index % 100 !== 12 
      && index % 100 !== 13 
      && index % 100 !== 14){
      expect(plural(index)).toBe(" года"); 
    }
  }
});

test("Лет", () => {
  for (index = 0; index <= 1000; index++ ) {
    if (index % 10 !== 1 
      && index % 100 === 11 
      || index % 10 === 0 
      || index % 10 >= 5 
      && index % 100 === 12 
      || index % 100 === 13 
      || index % 100 === 14) {
      expect(plural(index)).toBe(" лет");
    }
   
  }
});
