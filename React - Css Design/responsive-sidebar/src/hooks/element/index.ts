import { useState, useEffect, useMemo, useRef, useCallback } from "react";

export function useClickOutsideListenerRef<T=HTMLDivElement>(onOutsideClick: () => void) {
  const ref = useRef<T>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !(ref.current as any).contains(e.target)) {
      console.log('AKi');

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


export function useElementFocus<T=any>() {
  const [elementHover, setElementHover] = useState(false);
  const [elementClicked, setElementClicked] = useState(false);

  const elementRef = useClickOutsideListenerRef<HTMLDivElement>(() => setElementClicked(false));

  useEffect(() => {
    if(elementRef.current) {

      elementRef.current.onclick = () => setElementClicked(true);
      elementRef.current.onmouseenter = () => setElementHover(true);
      elementRef.current.onmouseleave = () => setElementHover(false);
    }
  }, [elementRef])

  const elementFocused = useMemo(() => elementHover || elementClicked, [elementClicked, elementHover])

  return [elementRef, elementFocused] as unknown as [React.RefObject<T>, boolean];
}
