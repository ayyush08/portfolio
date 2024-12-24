import React from 'react'
import { useSidebar } from './ui/sidebar'
import {motion} from 'framer-motion'

interface SideButtonProps {
    label: string,
    icon: React.JSX.Element | React.ReactNode;
    component: React.JSX.Element,
    setComponent:React.Dispatch<React.SetStateAction<React.JSX.Element>>
}

const SideButton = (
    { label, icon, component, setComponent }: SideButtonProps
) => {
    const { open, animate } = useSidebar()
    return (
        <button onClick={() => setComponent(component)}
            className="flex items-center md:gap-0  gap-6 justify-normal md:justify-evenly text-center py-3 px-2 rounded-md  text-white font-bold transition duration-200 hover:bg-white/15  border-2 border-transparent">
            {icon}
            <motion.span
                animate={{
                    display: animate ? (open ? "inline-block" : "none") : "inline-block",
                    opacity: animate ? (open ? 1 : 0) : 1,
                }}
                className="text-neutral-700 dark:text-neutral-200 text-center text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
            >
                {label}
            </motion.span>
        </button>
    )
}

export default SideButton