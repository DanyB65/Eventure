import Link from "next/link";


export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex justify-between w-full mb-8 items-start bg-magentaSky p-4 rounded-lg">
            <Link href="/">Eventure</Link>
            <nav>
                <ul className="flex space-x-6">
                    <Link href="/services">Services</Link>                 
                    <Link href="/businesses">Businesses</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/login">Login</Link>
                </ul>
            </nav>
        </header>
    );
}


  