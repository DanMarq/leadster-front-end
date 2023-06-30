import Image from "next/image"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import { useState } from 'react'

interface headerProps {
    theme: () => void
}

export default function Header ( props: headerProps) {

    const [toogle, setToogle]= useState <boolean> (false)
    function toogleTheme() {
        setToogle ( toogle => !toogle )
        props.theme()
    }

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-8">
                    <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"></div>
                    <div className="order-1 md:order-2">
                        <a href="" className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                            <Image src={toogle? '/assets/logo-bg-white.png' : '/assets/logo-bg-dark.png'} width={192} height={42} alt="" />
                        </a>
                    </div>
                    <div className="order-2 md:order-3 flex items-center">
                        <button 
                            type="button"
                            onClick={toogleTheme}
                            className="flex items-center p-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                        {toogle ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
                        <span className="sr-only">Toggle dark/light mode</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}