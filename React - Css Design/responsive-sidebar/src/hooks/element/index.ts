import { useState, useEffect, useMemo } from "react";

import { useClickOutsideListenerRef } from '../window';

export function useElementFocus<T=any>() {
  const [elementHover, setElementHover] = useState(false);
  const [elementClicked, setElementClicked] = useState(false);

  const elementRef = useClickOutsideListenerRef<HTMLDivElement>(() => setElementClicked(false));

  useEffect(() => {
    if(elementRef.current) {
      console.log('Entrou');

      elementRef.current.onclick = () => setElementClicked(true);
      elementRef.current.onmouseenter = () => setElementHover(true);
      elementRef.current.onmouseleave = () => setElementHover(false);
    }
  }, [elementRef])

  const elementFocused = useMemo(() => elementHover || elementClicked, [elementClicked, elementHover])

  return [elementRef, elementFocused] as unknown as [React.RefObject<T>, boolean];
}
