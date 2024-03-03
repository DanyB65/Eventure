
import Header from "@/app/compoents/header";
import SearchBar from "@/app/compoents/searchBar";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
  
  export default async function Business() {
    const session = await getServerSession(authOptions)
    if(!session) redirect('/api/auth/signin');
    return (
      <>
        <div style={{ backgroundColor: 'black', color: 'white' }}>Business page</div>
      </>
    );
  }  