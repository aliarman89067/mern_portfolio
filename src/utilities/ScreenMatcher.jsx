import React, { useEffect, useState } from "react";

export default function ScreenMatcher(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listner = () => {
      setMatches(media.matches);
    };
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listner);
    } else {
      media.addEventListener(listner);
    }
    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listner);
      } else {
        media.removeEventListener(listner);
      }
    };
  }, [matches, query]);
  return matches;
}
