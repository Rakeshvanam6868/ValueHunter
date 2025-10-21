"use client";
import React, { useEffect, useState } from 'react';
interface DealCountdownProps {
  expiryDate: string;
}
export const DealCountdown = ({
  expiryDate
}: DealCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(expiryDate).getTime() - new Date().getTime();
      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryDate]);
  if (isExpired) {
    return <span className="text-red-500">Expired</span>;
  }
  if (timeLeft.days > 7) {
    return <span>{new Date(expiryDate).toLocaleDateString()}</span>;
  }
  let displayText = '';
  if (timeLeft.days > 0) {
    displayText += `${timeLeft.days}d `;
  }
  if (timeLeft.hours > 0 || timeLeft.days > 0) {
    displayText += `${timeLeft.hours}h `;
  }
  displayText += `${timeLeft.minutes}m`;
  return <span className={timeLeft.days < 1 ? 'text-red-500 font-medium' : ''}>
      {displayText} left
    </span>;
};