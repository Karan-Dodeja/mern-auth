import React from 'react'

export default function Header() {
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link tp="/">
                    <h1 className='font-bold'>Auth App</h1>
                </Link>
                <ul className='flex gap-4'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
