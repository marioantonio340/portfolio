import { useState, useEffect } from "react";

const padZero = (value) => String(value).padStart(2, "0");

/**
 * Calculates exact calendar age breakdown between a birth date and target date.
 * @param {Date} now
 * @param {{ year: number, month: number, day: number }} birth
 */
export function calculateAgeBreakdown(now = new Date(), birth = { year: 1998, month: 8, day: 6 }) {
  const birthDate = new Date(birth.year, birth.month - 1, birth.day, 0, 0, 0, 0);

  if (now < birthDate) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0,
      formattedClock: "00:00:00",
    };
  }

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const totalDays = Math.floor((now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    formattedClock: `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`,
  };
}

/**
 * React hook returning live age metrics updated every second.
 * @param {{ year: number, month: number, day: number }} birth
 */
export function useRealtimeAge(birth = { year: 1998, month: 8, day: 6 }) {
  const { year, month, day } = birth;
  const [age, setAge] = useState(() => calculateAgeBreakdown(new Date(), { year, month, day }));

  useEffect(() => {
    const update = () => setAge(calculateAgeBreakdown(new Date(), { year, month, day }));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [year, month, day]);

  return age;
}

