import {useEffect, useState} from 'react';
import {useToggle} from './useToggle';

export const useStopwatch = (debounceRate: number = 50) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [running, toggle] = useToggle();
  const [lastLap, setLastLap] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    if (running) {
      interval = setInterval(() => {
        setCurrentTime((c) => c + debounceRate);
      }, debounceRate);
    } else if (interval !== null) {
      clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [running, debounceRate]);

  const minutes = ('0' + Math.floor((currentTime / 60000) % 60)).slice(-2);
  const seconds = ('0' + Math.floor((currentTime / 1000) % 60)).slice(-2);
  const milliSeconds = ('0' + ((currentTime / 10) % 100)).slice(-2);

  const resetTimer = () => {
    setCurrentTime(0);
    setLastLap(0);
    setLaps([]);
  };

  const saveLap = () => {
    setLaps([...laps, currentTime - lastLap]);
    setLastLap(currentTime);
  };

  return {
    minutes,
    seconds,
    milliSeconds,
    running,
    toggle,
    resetTimer,
    saveLap,
    laps,
  };
};
