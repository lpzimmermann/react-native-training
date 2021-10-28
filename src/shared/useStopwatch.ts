import {useEffect, useState} from 'react';
import {getPrintableTime} from './time';
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

  const resetTimer = () => {
    setCurrentTime(0);
    setLastLap(0);
    setLaps([]);
  };

  const saveLap = () => {
    setLaps([currentTime - lastLap, ...laps]);
    setLastLap(currentTime);
  };

  return {
    ...getPrintableTime(currentTime),
    running,
    toggle,
    resetTimer,
    saveLap,
    laps,
  };
};
