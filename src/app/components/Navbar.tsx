/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import cn from 'classnames'

const navbarItems = [
    "home",
    "skills",
    "projects",
    "experience",
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(()=>{
        setActiveSection("home")
    },[])

    const scrollToSection = useCallback((sectionId:string)=>{
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }

    },[])

    return (
        <div className='fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2'>
            <button className='bg-background card-shadow p-3 md:hidden rounded'
            onClick={()=>setIsOpen(!isOpen)}
            >

                <img className='block dark:hidden' src="/menu_icon_light.svg" alt="Menu icon" width={25} height={25} />
                <img className='hidden dark:block' src="/menu_icon_dark.svg" alt="Menu icon" width={25} height={25} />
            </button>
            <nav className={cn('bg-background card-shadow rounded p-3 md:block duration-300 ease-in-out',{
                'opacity-100': isOpen,
                'opacity-0 md:opacity-100': !isOpen,
            })}>
                <ul className='flex flex-col items-center md:flex-row gap-4 text-lg font-normal'>
                    {/* <li>
                        <div 
                            className={cn('rounded p-1', {
                                'bg-[var(--primary)] text-white': activeSection === 'home',
                            })}
                            onClick={() => {
                                setActiveSection('home')
                                scrollToSection('home');
                                setIsOpen(false)
                            }}
                        >
                            Home
                        </div>
                    </li>
                    <ListItem text='Skills' isActive={activeSection === 'skills'} onClick={() => {
                        setActiveSection('skills')
                        scrollToSection('skills')
                        setIsOpen(false)
                    }} /> */}
                    {
                        navbarItems.map((item) => (
                            <ListItem key={item} text={item.charAt(0).toUpperCase() + item.slice(1)} isActive={activeSection === item} onClick={() => {
                                setActiveSection(item)
                                scrollToSection(item)
                                setIsOpen(false)
                            }} />
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar


const ListItem = ({ text, isActive, onClick }: { text: string; isActive: boolean; onClick: () => void }) => {
    return (
        <li className='flex items-center gap-2'>
            <div
                className={cn('rounded p-2 duration-300 ease-in-out whitespace-nowrap hover:bg-[var(--primary)]/70 cursor-pointer', {
                    'bg-[var(--primary)] text-white': isActive,
                })}
                onClick={onClick}
            >
                {text}
            </div>
        </li>
    )
}