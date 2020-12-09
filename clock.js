'use strict';

const doubleDigits = (num) => {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};
setInterval(() => {
    const time = new Date();
    const hh = doubleDigits(time.getHours());
    const mm = doubleDigits(time.getMinutes());
    const ss = doubleDigits(time.getSeconds());
    const timeElement = document.getElementById("time");
    timeElement.innerHTML = `${hh}:${mm}:${ss}`;
}, 1000);
setInterval(() => {
    const calendar = new Date();
    const yy = doubleDigits(calendar.getFullYear());
    const mm = doubleDigits(calendar.getMonth() + 1);
    const dd = doubleDigits(calendar.getDate());
    const dayText = [ "Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat." ];
    const calendarElement = document.getElementById("calendar");
    calendarElement.innerHTML = `${yy}.${mm}.${dd}.${dayText[calendar.getDay()]}`;
}, 1000);