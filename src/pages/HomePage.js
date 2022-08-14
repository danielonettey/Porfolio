import React, { useEffect, useState } from 'react'
import DynamicText from '../components/DynamicText'
import Navbar from '../components/Navbar/Navbar'
import ProjectCard from '../components/ProjectCard'
import ContactSection from '../components/Sections/ContactSection'
import ExperienceSection from '../components/Sections/ExperienceSection'
import ProjectSection from '../components/Sections/ProjectSection'
import SocialsSection from '../components/Sections/SocialsSection'

// https://brittanychiang.com/

const HomePage = () => {

    return (
        <div className='bg-backColor text-white'>
            <div className='container mx-auto px-4 '>
                <Navbar />
                <div className='max-w-5xl mx-auto relative'>
                    <div className='space-y-5 pt-28 pb-16 sm:py-28'>
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

                    <ExperienceSection />
                    <ProjectSection />
                    <ContactSection />
                </div>

                {/* Socials Section  */}
                <SocialsSection />
            </div>
        </div>
    )
}



export default HomePage