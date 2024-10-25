"use client";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
const rqndpPro = localFont({
  src: "../app/fonts/rqndpro.ttf",
  variable: "--font-rqndpPro",
  weight: "100 900",
});
const ankaCoder = localFont({
  src: "../app/fonts/ankacoder.ttf",
  variable: "--font-ankacoder",
  weight: "100 900",
});
export default function PixelCountdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime();
    setIsLoading(false);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <h1
      className={`flex flex-col items-center justify-center text-da_lightest lg:text-[7rem] text-[3.4rem] font-bold tracking-widest ${rqndpPro.className}`}
    >
      <div className="lg:text-[3rem] text-[2rem] tracking-widest font-thin lg:mb-[-2rem] mt-[-1rem] lg:mt-[1rem] mt-[1rem]">
        HACKING ENDS IN
      </div>
      {`${formatTime(timeLeft.days)}:${formatTime(timeLeft.hours)}:${formatTime(
        timeLeft.minutes
      )}:${formatTime(timeLeft.seconds)}`}
      <div className="lg:text-[2rem] text-[1.4rem] tracking-widest font-thin lg:mt-[-2rem] mt-[-1rem]">
        DAYS : HRS : MIN : SEC
      </div>
    </h1>
  );
}
