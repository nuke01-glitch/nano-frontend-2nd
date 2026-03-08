import Image from "next/image";
import PredictionForm from './components/PredictionForm'; // Ensure this path is correct

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6">
      <main className="flex w-full max-w-3xl flex-col items-center gap-12 py-16 px-8 bg-white dark:bg-black rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Nanomaterial Predictor
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Enter the formula and size to predict the bandgap of your material.
          </p>
        </div>

        {/* Your New Component */}
        <div className="w-full">
           <PredictionForm />
        </div>

      </main>
    </div>
  );
}