import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='relative flex w-full justify-center'>
            <div className='absolute h-[140vh] w-full brightness-50'>
                <Image
                    src={'/images/background.jpg'}
                    alt={'Hero background'}
                    fill
                    objectFit='cover'
                />
            </div>

            <div className='relative mt-[35vh] flex items-center justify-center'>
                <div
                    data-scroll
                    data-scroll-speed='0.3'
                    className='absolute h-[475px] w-[350px] brightness-75'
                >
                    <Image
                        src={'/images/intro.jpg'}
                        alt={'Hero background'}
                        fill
                        objectFit='cover'
                        objectPosition='top'
                    />
                </div>
                <h1 className='absolute z-10 text-center text-[7vw] whitespace-nowrap text-white uppercase'>
                    Smooth Scroll
                </h1>
            </div>
        </div>
    )
}

export default Intro
