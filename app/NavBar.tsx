'use client'

import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react';

const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <div className='flex bg-slate-200 p-5 space-x-3'>
            <Link className='mr-5' href="/">Next.js</Link>
            <Link className='mr-5' href="/users">Users</Link>
            {status === 'loading' && <span className="loading loading-ring loading-lg"></span>}
            {status === 'authenticated' &&
                <div>
                    {session.user!.name}
                    <Link className='ml-5' href="/api/auth/signout">Sign Out</Link>
                </div>
            }
            {status === 'unauthenticated' && < Link className='mr-5' href="/api/auth/signin">Sign In</Link>}
        </div >
    )
}

export default NavBar