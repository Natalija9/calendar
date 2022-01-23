import { useCallback, useEffect, useRef } from "react";

export const useMounted = () => {
  const mountedRef = useRef(false);
  const mounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mounted;
};
