import { useState, useEffect, useRef } from "react";

export function useShowMore() {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef(null);
  const prevShowAllRef = useRef(showAll);

  useEffect(() => {
    if (prevShowAllRef.current === true && showAll === false && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    prevShowAllRef.current = showAll;
  }, [showAll]);

   const handleToggle = () => setShowAll(prev => !prev);

  return { showAll, handleToggle, buttonRef };
}