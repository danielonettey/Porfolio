import React from 'react'
import DynamicText from '../DynamicText'

const HeaderSection = () => {
    return (
        <div className='space-y-5 pt-28 pb-16 sm:pt-28 lg:min-h-screen'>
            <p className='text-xs sm:text-sm md:text-xl text-secondary font-medium'>Hi, my name is</p>
            <DynamicText subIndex={22} />
            <p className='text-xs sm:text-sm md:text-xl md:leading-8 max-w-4xl'>
                I am a frontend engineer with expertise in translating UI/UX wireframes to
                exceptional and high quality code. Currently, I am focused on building
                an online course learning platform for the
                <span className='text-secondary'> disabled pre-university</span> students
                in <span className='text-secondary'>Africa</span>.
            </p>
        </div>
    )
}

export default HeaderSection