'use client'
import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import { Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button'
type Props = {

}

const ThemeSwitcher = ({ }: Props) => {
    const { setTheme } = useTheme()
    return (
        <>
            <Tabs defaultValue="light" className="">
                <TabsList className='h-14'>
                    <TabsTrigger onClick={() => setTheme('light')} value="light" className={'w-12 h-12'}><Sun className='w-12 h-12 stroke-2' /></TabsTrigger>
                    <TabsTrigger onClick={() => setTheme('dark')} value="dark" className='w-12 h-12'><Moon className='w-12 h-12 stroke-2' /></TabsTrigger>
                </TabsList>

            </Tabs >
        </>
    )
}

export default ThemeSwitcher