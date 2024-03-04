const daysElement = document.querySelector(".dyas");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timercount = () => {
  setInterval(() => {
    const timer1 = new Date("05/3/2024").getTime();
    const today = new Date().getTime();
    const difference = timer1 - today;
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`)
  }, 1000);
};
timercount();
