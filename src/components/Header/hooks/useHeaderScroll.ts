import { useEffect, useState } from "react";

export const useHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (): void => {
    const currentScrollPosition: number =
      window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight: number = window.innerHeight;

    if (currentScrollPosition > viewportHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled };
};
