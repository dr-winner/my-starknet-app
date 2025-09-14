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
           <div className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-lg shadow-lg h-64">
             <div className="flex items-center gap-2 mb-4">
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
                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                 />
               </svg>
               <h2 className="text-2xl font-bold text-base-content">Connected Address</h2>
             </div>
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
