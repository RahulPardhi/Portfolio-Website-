import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function DateTime() {
  const [time, setTime] = useState(() => format(new Date(), 'EEE MMM dd yyyy, HH:mm'));

  useEffect(() => {
    const updateTime = () => {
      setTime(format(new Date(), 'EEE MMM dd yyyy, HH:mm'));
    };

    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-4 text-sm font-semibold text-foreground/85 font-mono tracking-wide">
      {time}
    </div>
  );
}
