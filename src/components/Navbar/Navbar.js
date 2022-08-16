import React from 'react'
import { MenuAlt3Icon } from "@heroicons/react/solid";

const Navbar = () => {

    const navLinks = [
        {
            name: 'About',
            path: '#about'
        },
        {
            name: 'Experience',
            path: '#experience'
        },
        {
            name: 'Projects',
            path: '#projects'
        }
    ]
    return (
        <div className='fixed w-full bg-backColor/95 z-50'>
            <div className='container flex justify-between mx-auto items-center py-5  px-4'>
            <div className='w-10 h-10 rounded-full border  border-secondary flex items-center justify-center'>
                <p className='text-secondary font-medium text-xl'>D</p>
            </div>
            <div className='hidden lg:flex items-center space-x-8'>
                {
                    navLinks.map((navLink, index) => (
                        <a href={navLink.path} key={index} className='hover:text-[#8A93AD] py-2 cursor-pointer' >
                            <span className='text-secondary'>{"0" + (index + 1) + ". "}</span>
                            {navLink.name}
                        </a>
                    ))
                }
                <a href='mailto:danielonettey@gmail.com' className=' border border-secondary text-secondary px-4 rounded py-2'>
                    Contact Me
                </a>
            </div>

            <div className='flex lg:hidden mr-2'>
                <button>
                    <MenuAlt3Icon className='w-10 text-secondary' />
                </button>
            </div>


        </div>
        </div>
    )
}

export default Navbar