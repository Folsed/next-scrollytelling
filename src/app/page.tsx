'use client'
import { useEffect } from 'react'
import Intro from '@/app/components/Intro'

const HomePage = () => {
    useEffect(() => {
        ;(async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll()
        })()
    }, [])
    return (
        <main>
            <Intro />
        </main>
    )
}
export default HomePage
