'use client'
import { useEffect } from 'react'

const HomePage = () => {
    useEffect(() => {
        ;(async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll()
        })()
    }, [])
    return (
        <div className='flex flex-col gap-6'>
            <div className='h-screen w-full bg-amber-400'></div>
            <div className='h-screen w-full bg-amber-400'></div>
            <div className='h-screen w-full bg-amber-400'></div>
            <div className='h-screen w-full bg-amber-400'></div>
        </div>
    )
}
export default HomePage
