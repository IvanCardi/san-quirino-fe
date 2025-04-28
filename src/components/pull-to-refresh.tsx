"use client";
import { usePullToRefresh } from "@/lib/hooks/usePullToRefresh";

export default function PullToRefresh() {
  const { isRefreshing } = usePullToRefresh();

  return (
    <>
      {isRefreshing && (
        <div className="absolute top-2 left-0 right-0">
          <Spinner />
        </div>
      )}
    </>
  );
}

function Spinner() {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
