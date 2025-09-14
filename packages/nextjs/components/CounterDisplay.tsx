"use client";

import { useScaffoldReadContract } from "~~/hooks/scaffold-stark";

const CounterDisplay = () => {
  const { data: counter, isLoading, error } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "get_counter",
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg">
        <div className="loading loading-spinner loading-md"></div>
        <p className="mt-2 text-sm text-base-content/70">Loading counter...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-error/10 rounded-lg shadow-lg">
        <p className="text-error font-medium">Error loading counter</p>
        <p className="text-sm text-error/70 mt-1">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-base-content mb-2">Counter Value</h2>
      <div className="text-4xl font-mono font-bold text-primary">
        {counter ? counter.toString() : "0"}
      </div>
      <p className="text-sm text-base-content/70 mt-2">
        Total greetings set: {counter ? counter.toString() : "0"}
      </p>
    </div>
  );
};

export default CounterDisplay;
