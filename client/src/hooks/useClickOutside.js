import { useEffect, useCallback } from 'react';

export function useClickOutside(element, onClick) {
  const handleClick = useCallback(
    (e) => {
      if (!e.composedPath().includes(element)) {
        onClick(e);
      }
    },
    [element, onClick]
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
}
