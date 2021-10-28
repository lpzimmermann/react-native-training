import {useState} from 'react';

export const useToggle = (): [boolean, () => void] => {
  const [enabled, setEnabled] = useState(false);

  return [
    enabled,
    () => {
      setEnabled(!enabled);
    },
  ];
};
