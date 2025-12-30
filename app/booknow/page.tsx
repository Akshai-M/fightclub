'use client';
import "@/app/globals.css";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function WorkshopPage() {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <div className="mb-8 flex right-44 relative">
        <div className="cursor-pointer bg-neutral-300 w-auto px-4 py-2 text-sm rounded-sm flex gap-2"
        onClick={() => backToHome()}
        >
          <MoveLeft/>Back to home
        </div>
        
        
      </div>
      <div className="p-10 rounded-2xl shadow-xl border border-neutral-800 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">🛒 Workshop Page</h1>
        <p className="text-neutral-500 text-lg mb-6 flex flex-col">
          {"We're building something exciting here."}
          Our Workshop page will be available soon.
          
        </p>
        <span className="inline-block bg-yellow-500 font-semibold px-4 py-2 rounded-lg shadow-md">
          🚧 Under Construction
        </span>
      </div>
    </div>
  );
}
