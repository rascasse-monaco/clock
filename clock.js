'use strict';

/**
 * @param {object} now 現在時刻のミリ秒 
 * @returns {string} 文字列化して、１桁の場合は10の位に0を入れて２桁にする。
 */
function toStrAndDubDigt(now) {
  return now.toString().padStart(2, '0');
}

setInterval(() => { // 表示を１秒毎に更新
  const now = new Date();
  const time = { // 時計の文字列を連想配列に定義
    hour: toStrAndDubDigt(now.getHours()),
    min: toStrAndDubDigt(now.getMinutes()),
    sec: toStrAndDubDigt(now.getSeconds())
  };
  const calendar = { // カレンダーの文字列を連想配列に定義
    year: now.getFullYear(),
    month: toStrAndDubDigt((now.getMonth() + 1)),
    date: toStrAndDubDigt(now.getDate()),
    dayText: [ 'Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.' ]
  };
  // 時計表示部分
  const timeElement = document.getElementById('time');
  timeElement.innerHTML = 
    `${time.hour}:${time.min}:${time.sec}`;
  // カレンダー表示部分
  const calendarElement = document.getElementById('calendar');
  calendarElement.innerHTML =
    `${calendar.year}.${calendar.month}.${calendar.date}.${calendar.dayText[now.getDay()]}`;
}, 1000);