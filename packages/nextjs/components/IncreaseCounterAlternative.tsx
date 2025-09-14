"use client";

import { useScaffoldWriteContract } from "~~/hooks/scaffold-stark";
import { notification } from "~~/utils/scaffold-stark";

const IncreaseCounterAlternative = () => {
  const { writeContractAsync: setGreeting, isPending } = useScaffoldWriteContract({
    contractName: "YourContract",
    functionName: "set_greeting",
    args: ["Counter incremented!", null], // null for amount_strk (no STRK payment)
  });

  const handleIncreaseCounter = async () => {
    try {
      await setGreeting();
      notification.success("Counter increased successfully!");
    } catch (error) {
      console.error("Error increasing counter:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      notification.error(`Failed to increase counter: ${errorMessage}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg h-64">
      <h2 className="text-2xl font-bold text-base-content mb-4">Increase Counter (Alternative)</h2>
      <p className="text-sm text-base-content/70 mb-4 text-center">
        Uses set_greeting function to increment counter
      </p>
      <button
        onClick={handleIncreaseCounter}
        disabled={isPending}
        className={`btn btn-primary btn-lg flex items-center gap-2 ${isPending ? "loading" : ""}`}
      >
        {isPending ? (
          "Increasing..."
        ) : (
          <>
            <span>Increase Counter</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </>
        )}
      </button>
      {isPending && (
        <p className="text-sm text-primary mt-2">Transaction in progress...</p>
      )}
    </div>
  );
};

export default IncreaseCounterAlternative;
