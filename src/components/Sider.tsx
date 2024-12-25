"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "./ui/sidebar";
import {
    IconArrowLeft,
    IconHome,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import me from '../../assets/p.jpg'
import Ayush from "@/app/ayush/page";
import Main from "./Main";
import SideButton from "./SideButton";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
export function SidebarDemo() {
    const links = [
        {
            label: "Home",
            component: <Main />,
            icon: (
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "About Me",
            component: <Ayush />,
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            component: <Dashboard />,
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            component: <Dashboard />,
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    const [component, setComponent] = useState(<Main />)
    return (
        <BackgroundBeamsWithCollision className='min-h-screen min-w-full  mx-auto flex '>

        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-violet-800 dark:bg-opacity-25 min-w-full flex-1 max-w-7xl mx-0 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" 
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SideButton
                                key={idx}
                                    label={link.label}
                                    icon={link.icon}
                                    component={link.component}
                                    setComponent={setComponent}/>
                            ))}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>
            {component}
        </div>
</BackgroundBeamsWithCollision>
    );
}
export const Logo = () => {
    return (
        <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <Image
                src={me}
                className="h-14 w-14 flex-shrink-0 rounded-full"
                width={50}
                height={50}
                alt="Avatar"
            />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-lg text-wrap text-center transition-all text-black dark:text-white whitespace-pre"
            >
                Ayush Kumar Gupta
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex justify-center space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <Image
                src={me}
                className="h-7 w-7 flex-shrink-0 rounded-full"
                width={50}
                height={50}
                alt="Avatar"
            />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            aaf
        </div>
    );
};
