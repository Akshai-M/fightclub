'use client';
import "@/app/globals.css";
import { useRouter } from "next/navigation";
export default function ProductsPage() {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  }
  const lma = () => {
    router.push("/learn-martial-art");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <div className="mb-8 flex gap-x-68">
        <div className="cursor-pointer bg-neutral-300 w-auto px-4 py-2 text-sm rounded-sm flex"
        onClick={() => backToHome()}
        >
          Back to home
        </div>
        <div className="cursor-pointer bg-neutral-300 w-auto px-4 py-2 text-sm rounded-sm flex"
        onClick={() => lma()}
        >
          Learn Martial Arts
        </div>
        
        
      </div>
      <div className="p-10 rounded-2xl shadow-xl border border-neutral-800 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">🛒 Products Page</h1>
        <p className="text-neutral-500 text-lg mb-6 flex flex-col">
          {"We're building something exciting here."}
          Our product collection will be available soon.
          <span className="text-neutral-800 text-xl text-bold">
            {" "}
            For immediate requirement, call: 7550134063
          </span>
        </p>
        <span className="inline-block bg-yellow-500 font-semibold px-4 py-2 rounded-lg shadow-md">
          🚧 Under Construction
        </span>
      </div>
    </div>
  );
}
