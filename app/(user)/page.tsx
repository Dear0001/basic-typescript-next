"use client";
import { useRouter } from "next/navigation";


const session = "some session";
// const session = null
export default function Home() {
  const router = useRouter();
  if(!session) {
    throw new Error("Error tesing")
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Home Page</h1>
      <button
        onClick={() => router.push("/services/")}
        className="py-1.5 px-2.5 bg-blue-300 rounded"
      >
        Enroll Now
      </button>
    </div>
  );
}
