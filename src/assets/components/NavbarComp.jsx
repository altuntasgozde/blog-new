import React from 'react'

export const NavbarComp = () => {
    return (
        <div>
            <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
                <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <a class="flex-none text-xl font-semibold" href="#">Brand</a>
                    <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
                        <a class="font-medium text-blue-500" href="#" aria-current="page">+New Entry</a>
                        <a class="font-medium text-gray-600 hover:text-gray-400" href="#">Account</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
