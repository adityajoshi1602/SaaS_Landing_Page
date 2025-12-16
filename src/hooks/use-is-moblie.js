import React from "react";

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }

    const mql = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    checkMobile();
    mql.addEventListener("change", checkMobile);

    return () => {
      mql.removeEventListener("change", checkMobile);
    };
  }, []);

  return isMobile;
}

export { useIsMobile };
