// import Link from "next/link";


// export default function Header() {
//     return (
//         <header className="sticky top-0 z-50 flex justify-between w-full mb-8 items-start bg-magentaSky p-4 rounded-lg">
//             <Link href="/">Eventure</Link>
//             <nav>
//                 <ul className="flex space-x-6">
//                     <Link href="/services">Services</Link>                 
//                     <Link href="/businesses">Businesses</Link>
//                     <Link href="/events">Events</Link>
//                     <Link href="/profile">Profile</Link>
//                     <Link href="/login">Login</Link>
//                 </ul>
//             </nav>
//         </header>
//     );
// }


'use client';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";


export default function Header() {
    const isLoggedIn = useSession().status === 'authenticated';
    return (
        <header className="sticky top-0 z-50 flex justify-between w-full mb-8 items-start bg-magentaSky p-4 rounded-lg">
            <Link href="/">Eventure</Link>
            <nav>
                <ul className="flex space-x-6">
                    {isLoggedIn ? (
                        <>
                            <Link href="/services">Services</Link>
                            <Link href="/businesses">Businesses</Link>
                            <Link href="/events">Events</Link>
                            <Link href="/profile">Profile</Link>
                            <button onClick={() => signOut({redirect: false})}>Logout</button>
                        </>
                    ) : <>
                    <Link href="/register">Register</Link>
                    <Link href='/api/auth/signin'>Login</Link>
                    </>}
                </ul>
            </nav>
        </header>
    );
}


