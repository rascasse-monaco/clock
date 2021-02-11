'use strict';

setInterval(() => {
  
  const now = new Date();
  const timeArrey = {
    hour: now.getHours().toString().padStart(2, '0'),
    min: now.getMinutes().toString().padStart(2, '0'),
    sec: now.getSeconds().toString().padStart(2, '0')
  };
  const calendarArrey = {
    year: now.getFullYear(),
    month: (now.getMonth() + 1).toString().padStart(2, '0'),
    date: now.getDate().toString().padStart(2, '0'),
    dayText: [ 'Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.' ]
  };

  const timeElement = document.getElementById('time');
  timeElement.innerHTML = 
    `${timeArrey.hour}:${timeArrey.min}:${timeArrey.sec}`;

  const calendarElement = document.getElementById('calendar');
  calendarElement.innerHTML =
    `${calendarArrey.year}.${calendarArrey.month}.${calendarArrey.date}.${calendarArrey.dayText[now.getDay()]}`;

}, 1000);