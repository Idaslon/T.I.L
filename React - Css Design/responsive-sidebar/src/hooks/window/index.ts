import { useEffect, useRef, useCallback } from "react";

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
