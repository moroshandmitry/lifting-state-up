import { useEffect } from "react";

export const DateTime = ({ date, onGetDate }) => {
  useEffect(() => {
    const interval = setInterval(onGetDate, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Время: {date}</div>;
};
