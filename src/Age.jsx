import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export default function Age({editCountDown, birthDate}) {
  function calculateAge() {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    lastBirthday.setFullYear(birthDate.getFullYear() + age);
    return age;
  }

  function calculateCountDown() {
    const today = new Date().getTime();
    const nextBirthdayTime = nextBirthday.getTime();
    const diff = nextBirthdayTime - today;
    editCountDown(Math.ceil(diff/(1000 * 60 * 60 * 24)));
  }

  let lastBirthday = new Date(birthDate);
  let nextBirthday = new Date(birthDate);
  const [counter, setCounter] = useState(calculateAge());

  function isTodayBirthday() {
    const today = new Date();
    return today.getFullYear() === nextBirthday.getFullYear()
      && today.getMonth() === nextBirthday.getMonth()
      && today.getDay() === nextBirthday.getDay();
  }

  useEffect(() => {
    nextBirthday.setFullYear(lastBirthday.getFullYear() + 1);
    calculateCountDown();
    if (isTodayBirthday()) {
      nextBirthday.setFullYear(nextBirthday.getFullYear()+1);
      lastBirthday.setFullYear(lastBirthday.getFullYear()+1);
    }
    const interval = setInterval(() => {
      const lastBirthdayTime = lastBirthday.getTime();
      const todayTime = new Date().getTime() - lastBirthdayTime;
      const nextBirthdayTime = nextBirthday.getTime() - lastBirthdayTime;
      setCounter(Number((calculateAge() + (todayTime/nextBirthdayTime)).toFixed(10)));
    }, 50);
    return () => clearInterval(interval);
  });

  return (
    <>
      <p className="font-extrabold text-purple-400 lg:text-8xl md:text-6xl">{counter}</p>
    </>
  )
}