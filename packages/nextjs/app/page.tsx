import Link from "next/link";
import Image from "next/image";
import { ConnectedAddress } from "~~/components/ConnectedAddress";
import CounterDisplay from "~~/components/CounterDisplay";
import IncreaseCounterButton from "~~/components/IncreaseCounterButton";
import IncreaseCounterAlternative from "~~/components/IncreaseCounterAlternative";

const Home = () => {
  return (
   <div className="min-h-screen bg-base-200">
     <div className="container mx-auto px-4 py-8">
       <div className="max-w-4xl mx-auto">
         <h1 className="text-4xl font-bold text-center mb-8 text-base-content">
           Welcome to Your Starknet App
         </h1>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           <CounterDisplay />
           <IncreaseCounterButton />
           <IncreaseCounterAlternative />
           <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg">
             <h2 className="text-2xl font-bold text-base-content mb-2">Connected Address</h2>
             <ConnectedAddress />
           </div>
         </div>
         
         <div className="text-center">
           <Link 
             href="/debug" 
             className="btn btn-primary btn-lg"
           >
             Debug Contracts
           </Link>
         </div>
       </div>
     </div>
   </div>
  );
};

export default Home;
