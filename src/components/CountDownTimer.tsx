import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const targetDate = new Date('2025-07-15T12:40:00+03:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-gray-800 text-lg font-medium">
      <TimeUnit value={timeLeft.days} label="недель" divideBy={7} />
      <TimeUnit value={timeLeft.days % 7} label="дней" />
      <TimeUnit value={timeLeft.hours} label="часов" />
      <TimeUnit value={timeLeft.minutes} label="минут" />
      <TimeUnit value={timeLeft.seconds} label="секунд" />
    </div>
  );
};

type TimeUnitProps = {
  value: number;
  label: string;
  divideBy?: number;
};

const TimeUnit = ({ value, label, divideBy }: TimeUnitProps) => {
  const displayValue = divideBy ? Math.floor(value / divideBy) : value;

  return (
    <div className="flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md min-w-[70px]">
      <div className="text-3xl font-bold text-rose-500">{displayValue}</div>
      <div className="text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
};
