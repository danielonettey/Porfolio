import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/AboutSection/AboutSection'
import ContactSection from '../components/ContactSection/ContactSection'
import ExperienceSection from '../components/ExperienceSection/ExperienceSection'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import ProjectSection from '../components/ProjectSection/ProjectSection'
import SocialsSection from '../components/SocialsSection/SocialsSection'

//Inspiration:  https://brittanychiang.com/

const HomePage = () => {
    return (
        <div className='bg-backColor text-white'>
            <Navbar />
            <div className='container mx-auto px-4'>
                
                <div className='max-w-5xl mx-auto relative'>
                    <HeaderSection />
                    <AboutSection />
                    <ExperienceSection />
                    <ProjectSection />
                    <ContactSection />
                </div>

                {/* Socials Section  */}
                <SocialsSection />
            </div>

            {/* cc  */}
            <div className='text-center text-white/60 text-xs pb-5'>
                Designed & Built by <span className='text-white'>Daniel Okaitei Nettey</span> <br />
                Inspired by <a href='https://brittanychiang.com' target='_blank' className=' underline'>Brittany Chiang</a>
            </div>
        </div>
    )
}



export default HomePage