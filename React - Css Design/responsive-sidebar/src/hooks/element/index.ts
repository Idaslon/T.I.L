import { useState, useEffect } from "react";

import { useClickOutsideListenerRef } from '../window';

export function useElementFocus() {
  const [elementHover, setElementHover] = useState(false);
  const [elementClicked, setElementClicked] = useState(false);

  const elementRef = useClickOutsideListenerRef<HTMLElement>(() => {});

  useEffect(() => {
    if(elementRef.current) {
      console.log('Entrou');

    }
  }, [elementRef])


  return [elementRef, elementHover || elementClicked];
}



// const handleBarsClick = useCallback(() => {
//   setBarsClicked(true);
// }, []);

// const handleOutsideBarsClick = useCallback(() => {
//   setBarsClicked(false);
// }, []);

// const handleMouseBarsEnter = useCallback(() => {
//   setBarsHover(true);
// }, []);

// const handleMouseBarsLeave = useCallback(() => {
//   setBarsHover(false);
// }, []);
