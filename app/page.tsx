import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"

export const dynamic = "force-dynamic";

async function getData() {
  const DB_URL = process.env.FIREBASE_DATABASE_URL;
  if (!DB_URL) {
    throw new Error("Firebase Database URL is missing");
  }

  const res = await fetch(`${DB_URL}/.json`);
  const data = await res.json();
  // console.log("FIREBASE DATA:", JSON.stringify(data)?.slice(0, 500));
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      {data?.main ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}

