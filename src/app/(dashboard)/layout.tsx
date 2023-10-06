import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'
import React, { ComponentPropsWithoutRef } from 'react'

export default function Layout({ children }: ComponentPropsWithoutRef<'div'>) {
    return <div className="h-full w-full">
        <header className="py-2 px-6 bg-primary">
            <div className="flex justify-between items-center">
                <Logo />
                <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <UserButton afterSignOutUrl='/sign-in' appearance={{
                        elements: {
                            avatarBox: 'w-10 h-10'
                        },

                    }} />
                </div>
            </div>

        </header>
        <main className="py-2 px-6">
            {children}
        </main>
    </div>
}