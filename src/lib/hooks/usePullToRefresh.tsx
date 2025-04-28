"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function usePullToRefresh(threshold = 150) {
  const router = useRouter();
  const [startY, setStartY] = useState<number | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    function handleTouchStart(e: TouchEvent) {
      if (window.scrollY === 0) {
        setStartY(e.touches[0].clientY);
      }
    }

    function handleTouchMove(e: TouchEvent) {
      if (startY !== null && !isRefreshing) {
        const currentY = e.touches[0].clientY;
        const distance = currentY - startY;

        if (distance > threshold) {
          setIsRefreshing(true);
        }
      }
    }

    function handleTouchEnd() {
      if (isRefreshing) {
        setTimeout(() => {
          router.refresh();
          setIsRefreshing(false);
        }, 200);
      }

      setStartY(null);
    }

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startY, isRefreshing, threshold, router]);

  return { isRefreshing };
}
