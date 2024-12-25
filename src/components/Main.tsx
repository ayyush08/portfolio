'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Main = () => {
    return (
        <>
        <div className="flex mx-auto flex-col md:flex-row items-center justify-center min-h-screen px-6 py-4">

            {/* Text Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl space-y-4">
                <TextGenerateEffect className="text-3xl md:text-5xl font-extrabold leading-snug" words={"Hi there! I'm"} />
                <TextGenerateEffect className="text-3xl md:text-5xl font-extrabold leading-snug text-red-500" words={"Ayush Kumar Gupta"} />
                <p className="text-violet-300 text-sm md:text-lg leading-relaxed">
                A problem-solving developer driven by a passion for programming, with an insatiable eagerness to learn and adapt to new technologies continuously.
                </p>
            </div>

            {/* Lottie Animation Section */}
            <div className="w-full md:w-fit max-w-sm md:max-w-md mt-8 md:mt-0">
                <DotLottieReact
                    src="https://lottie.host/6b12f128-199f-4dec-8414-594148320751/TOIpQ8uucp.lottie"
                    loop
                    className="h-auto w-full"
                    autoplay
                    height={400}
                    width={400}
                />
            </div>
        </div>
        </>
    );
};

export default Main;
