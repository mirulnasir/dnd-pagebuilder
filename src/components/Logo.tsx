'use client'
import { Cat } from '@phosphor-icons/react'
import Link from 'next/link'
import * as React from 'react'

type Props = {

}

const Logo = ({ }: Props) => {
    return (
        <>
            <Link href="/" className="flex items-center gap-2 hover:">
                <Cat className='w-12 h-12 ' />
                <span className="">nyan app</span>
            </Link>

        </>
    )
}

export default Logo