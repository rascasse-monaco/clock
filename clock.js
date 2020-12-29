'use strict';
import { makeDoubleDigits } from './time-handling-util.js';

setInterval(() => {
  const now = new Date();
  const timeArrey = {
    hour: makeDoubleDigits(now.getHours()),
    min: makeDoubleDigits(now.getMinutes()),
    sec: makeDoubleDigits(now.getSeconds())
  };
  const calendarArrey = {
    year: makeDoubleDigits(now.getFullYear()),
    month: makeDoubleDigits(now.getMonth() + 1),
    date: makeDoubleDigits(now.getDate()),
    dayText: [ 'Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.' ]
  };

  const timeElement = document.getElementById('time');
  timeElement.innerHTML = 
    `${timeArrey.hour}:${timeArrey.min}:${timeArrey.sec}`;

  const calendarElement = document.getElementById('calendar');
  calendarElement.innerHTML =
    `${calendarArrey.year}.${calendarArrey.month}.${calendarArrey.date}.${calendarArrey.dayText[now.getDay()]}`;

}, 1000);