'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface PropsType {
    children: React.ReactNode,
    session: Session | null;
}

const Providers = ({ children, session }: PropsType) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Providers;