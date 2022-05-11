import React, { useEffect, useCallback } from 'react';

export function useClickOutside(ref: React.RefObject<HTMLElement | undefined>, onClick: (e: Event) => void) {
  const handleClick = useCallback(
    (e: Event) => {
      if (ref.current && !e.composedPath().includes(ref.current)) {
        onClick(e);
      }
    },
    [ref, onClick]
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
}
