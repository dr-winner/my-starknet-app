"use client";

import { useScaffoldReadContract } from "~~/hooks/scaffold-stark";

const CounterDisplay = () => {
  const { data: counter, isLoading, error } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "get_counter",
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg h-64">
        <div className="loading loading-spinner loading-md"></div>
        <p className="mt-2 text-sm text-base-content/70">Loading counter...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-error/10 rounded-lg shadow-lg h-64">
        <p className="text-error font-medium">Error loading counter</p>
        <p className="text-sm text-error/70 mt-1">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg h-64">
      <div className="flex items-center gap-2 mb-2">
        <svg 
          className="w-6 h-6 text-primary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
          />
        </svg>
        <h2 className="text-2xl font-bold text-base-content">Counter Value</h2>
      </div>
      <div className="text-4xl font-mono font-bold text-primary mb-2">
        {counter ? counter.toString() : "0"}
      </div>
      <p className="text-sm text-base-content/70 text-center">
        Total greetings set: {counter ? counter.toString() : "0"}
      </p>
    </div>
  );
};

export default CounterDisplay;
