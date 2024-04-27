import React from 'react'

export const NavbarComp = () => {
    return (
        <div>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <a className="flex-none text-xl font-semibold" href="#">Brand</a>
                    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium text-blue-500" href="#" aria-current="page">+New Entry</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400" href="#">Account</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
