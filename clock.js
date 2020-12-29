'use strict';
import { makeDoubleDigits } from './time-handling-util.js';

setInterval(() => {
  const time = new Date();
  const timeArrey = {
    hour: makeDoubleDigits(time.getHours()),
    min: makeDoubleDigits(time.getMinutes()),
    sec: makeDoubleDigits(time.getSeconds())
  };

  const calendar = new Date();
  const calendarArrey = {
    year: makeDoubleDigits(calendar.getFullYear()),
    month: makeDoubleDigits(calendar.getMonth() + 1),
    date: makeDoubleDigits(calendar.getDate()),
    dayText: [ 'Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.' ]
  };

  const timeElement = document.getElementById('time');
  timeElement.innerHTML = 
    `${timeArrey.hour}:${timeArrey.min}:${timeArrey.sec}`;

  const calendarElement = document.getElementById('calendar');
  calendarElement.innerHTML =
    `${calendarArrey.year}.${calendarArrey.month}.${calendarArrey.date}.${calendarArrey.dayText[calendar.getDay()]}`;

}, 1000);