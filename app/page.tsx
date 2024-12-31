import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

// async function getData() {

//   // return await (await get(ref(database))).val()

//   const DB_URL = process.env.FIREBASE_DATABASE_URL + '/.json'
//   const res = await fetch(DB_URL, { cache: 'no-store' })
//   const data = res.json()
//   return data
// }




// export default async function page() {

 
//     let data = null;
//     try {
//       data = await getData();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }

// // new get data function with proper error handling


//   return (
//     <>
//       {data ?
//         <HomePage data={data} />
//         :
//         <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
//           <FaNodeJs size={100} className='animate-pulse' />
//           <p className='animate-pulse text-xl'>Loading...</p>
//         </div>
//       }
//     </>
//   )
// }

// Ensure to update your page function to correctly use async data fetching

async function getData() {
  const DB_URL = process.env.FIREBASE_DATABASE_URL;
  if (!DB_URL) {
    throw new Error("Firebase Database URL is missing");
  }

  const res = await fetch(`${DB_URL}/.json`);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData(); // Fetch data server-side

  return (
    <>
      {data ? (
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


