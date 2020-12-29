'use strict';
export function makeDoubleDigits(num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};