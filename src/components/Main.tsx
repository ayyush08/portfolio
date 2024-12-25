'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image'
const Main = () => {
    return (
        <>
            
                <div className='flex  mx-auto  items-center justify-center gap-10 p-10 '>
                    <div className='border-4 border-red-200'>
                        <h1 className=' text-4xl md:text-5xl p-8 font-bold'>
                            Hi there! I'm
                        </h1>
                        <h1 className=' text-4xl md:text-5xl p-8 font-bold'>
                            Ayush Kumar Gupta
                        </h1>
                    </div>
                    <div className=' mx-auto border-4'>
                        
                        <DotLottieReact
                            src="https://lottie.host/6b12f128-199f-4dec-8414-594148320751/TOIpQ8uucp.lottie"
                            loop
                            height={400}
                            width={300}
                            autoplay
                        />
                    </div>
                </div>
            
        </>
    )
}

export default Main