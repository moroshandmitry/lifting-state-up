import { useEffect } from "react";

export const Timer = ({ seconds, onAddSeconds }) => {
  useEffect(() => {
    const interval = setInterval(onAddSeconds, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Секунды: {seconds}</div>;
};
