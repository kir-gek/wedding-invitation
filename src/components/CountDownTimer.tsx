import { useEffect, useState } from "react";

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
  }, []);

  return (
    <div className="flex flex-nowrap justify-center items-center gap-2 sm:gap-4 px-2 sm:px-4 overflow-x-auto w-full">
      <TimeUnit value={Math.floor(timeLeft.days / 7)} label="недель" />
      <Separator />
      <TimeUnit value={timeLeft.days % 7} label="дней" />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="часов" />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="минут" />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="секунд" />
    </div>
  );
};

const Separator = () => (
  <div className="text-rose-300 font-bold text-2xl sm:text-3xl">:</div>
);

type TimeUnitProps = {
  value: number;
  label: string;
};

const TimeUnit = ({ value, label }: TimeUnitProps) => {
  return (
    <div className="flex flex-col items-center bg-white/70 backdrop-blur-md sm:px-3 py-2 rounded-xl shadow-md border border-rose-200 min-w-[56px] sm:min-w-[64px]">
      <div className="text-xl sm:text-2xl font-bold text-rose-500">{value}</div>
      <div className="text-xs sm:text-sm tracking-wide uppercase text-gray-600">{label}</div>
    </div>
  );
};
