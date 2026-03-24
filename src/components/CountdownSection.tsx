import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-07-01T00:00:00Z");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 lg:py-32 bg-noir text-center">
      <p className="text-primary-foreground/40 text-xs font-body tracking-[0.3em] uppercase mb-4">
        Edition II — Coming Soon
      </p>
      <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground font-light mb-12">
        The Next Chapter Awaits
      </h2>

      <div className="flex justify-center gap-6 sm:gap-10 mb-12">
        {units.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="text-3xl sm:text-5xl font-serif text-primary-foreground font-light mb-1 tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <p className="text-primary-foreground/30 text-[10px] font-body tracking-[0.3em] uppercase">
              {unit.label}
            </p>
          </div>
        ))}
      </div>

      <div className="w-16 h-px bg-primary-foreground/10 mx-auto" />
    </section>
  );
};

export default CountdownSection;
