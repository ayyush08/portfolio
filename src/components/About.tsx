import React from 'react'


const qualities = [
    {
        title: 'Problem Solver',
        description: 'I am a problem-solving developer driven by a passion for programming, with an insatiable eagerness to learn and adapt to new technologies continuously.'
    },
    {
        title: 'Self-taught Developer',
        description: 'I am a self-taught developer who loves to build things that make a difference. I have a keen interest in web development and I am always looking for new opportunities to learn and grow.'
    },
    {
        title: 'Web Developer',
        description: 'I am proficient in JavaScript, React, Node.js, Express, MongoDB, and other web technologies. I am also familiar with Python, Django, and other programming languages and frameworks.'
    },
    {
        title: 'Looking for Opportunities',
        description: 'I am currently looking for new opportunities to work on exciting projects and collaborate with other developers to create amazing things.'
    }
]

const About = () => {
    return (
        <div className='mx-auto p-20 min-h-screen overflow-y-auto-auto over'>
            <h1 className='text-5xl italic rampart-one-regular font-extrabold text-center underline underline-offset-8'>About Me</h1>
            <div>
                {qualities.map((quality, index) => (
                    <div key={index} className='mt-10 '>
                        <h2 className='text-3xl font-mono font-semibold'>{quality.title}</h2>
                        <p className='text-lg font-mono'>{quality.description}</p>
                    </div>))}
            </div>
        </div>
    )
}

export default About