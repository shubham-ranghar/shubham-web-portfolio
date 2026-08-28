import { useEffect, useState } from "react";

export function useIsLightTheme() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const read = () => setLight(document.documentElement.classList.contains("light"));
    read();

    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return light;
}
