import React from 'react';
import { getServerAuthSession } from '@/lib/auth';
import { Session } from 'next-auth';
import LoginForm from '@/component/LoginForm';

export default async function Home() {
    const session: Session | null = await getServerAuthSession();

    return (
        <main>
            {session ? (
                <div>
                    <p>メールアドレス: {session.user?.email}</p>
                    <p>名前: {session.user?.name}</p>
                </div>
            ) : (
                <LoginForm />
            )}
        </main>
    );
}
