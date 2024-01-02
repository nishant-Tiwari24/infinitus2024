'use client';
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const targetDate = '2024-02-22';
  const targetTime = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const timeDifference = targetTime - now;

  if (timeDifference > 0 || timeDifference < 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <section className="timer-container ">
      <section className="timer absolute left-[47%] -translate-x-[50%] -translate-y-[50%] grid gap-40 mt-24 top-[-300px]">
        <div className="flex text-[#f7f7f7] text-center align-middle translate-x-[12%] -translate-y-[50%] justify-center text-3xl border-sky-100 border-[2px] border-separate rounded-[20px] w-[25rem] py-[2rem] h-[10rem] gap-4 font-serif max-w-90">
          <section>
            <h2 className="text-5xl">{timeLeft.days}</h2>
            <p><small className="text-[12px]">Days</small></p>
          </section>
          <span>:</span>
          <section>
            <h2 className="text-5xl">{timeLeft.hours}</h2>
            <p><small className="text-[12px]">Hours</small></p>
          </section>
          <span>: </span>
          <section>
            <h2 className="text-5xl">{timeLeft.minutes}</h2>
            <p><small className="text-[12px]">Minutes</small></p>
          </section>
          <span>: </span>
          <section>
            <h2 className="text-5xl">{timeLeft.seconds}</h2>
            <p><small className="text-[12px]">Seconds</small></p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Timer;
