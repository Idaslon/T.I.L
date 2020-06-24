import { useEffect, useRef, useCallback, useState, useLayoutEffect } from "react";

export function useClickOutsideListenerRef<T=any>(onOutsideClick: () => void) {
  const ref = useRef<T>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (!(ref.current! as any).contains(e.target)) {
      onOutsideClick()
    }
  }, [onOutsideClick])


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
}

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
