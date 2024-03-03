// import Header from "@/app/compoents/header";


// export default  function Profile({}) {

//   return (
//     <>
      
//     <div>profile page</div>
//     </>
//   );
// }



import Header from "@/app/compoents/header";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";


export default async function Profile({}) {
  const session = await getServerSession(authOptions)
  if(!session) redirect('/api/auth/signin');

  return (
    <>
      
    <div>profile page</div>
    </>
  );
}