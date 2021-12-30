import { useEffect, useState } from "react";
export const Time = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCounter((p) => {
        if (p === 0) {
          clearInterval(Interval);
          return 0;
        }
        return p - 1;
      });
        
    }, 1000);
      return () => {
        clearInterval(Interval);
      }
  }, []);

  return (
    <div>
      <h1> Counter:{counter}</h1>
    </div>
  );
};
