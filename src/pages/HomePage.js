import React, { useEffect, useState } from 'react'
import DynamicText from '../components/DynamicText'
import Navbar from '../components/Navbar/Navbar'
import ProjectCard from '../components/ProjectCard'
import SocialsSection from '../components/SocialsSection'
import projects from '../data/projects'



// https://brittanychiang.com/

const HomePage = () => {

    return (
        <div className='bg-backColor text-white'>
            <div className='container mx-auto px-4 '>
                <Navbar />
                <div className='max-w-5xl mx-auto relative'>
                    <div className='space-y-5 pt-28 pb-16 sm:py-28'>
                        <p className='text-sm md:text-xl text-secondary font-medium'>Hi, my name is</p>
                        <DynamicText subIndex={22} />
                        <p className='text-sm md:text-xl md:leading-8 max-w-4xl'>
                            I am a frontend engineer with expertise in translating UI/UX wireframes to
                            exceptional and high quality code. Currently, I am focused on building
                            an online course learning platform for the
                            <span className='text-secondary'> disabled pre-university</span> students
                            in <span className='text-secondary'>Africa</span>.
                        </p>
                    </div>

                    {/* Project Section  */}
                    <div className='sm:my-20 sm:pt-20'>
                        <p className='text-2xl sm:text-4xl font-semibold'>
                            <span className='text-secondary '>03. </span>
                            Projects
                        </p>

                        <div className='mt-3 sm:mt-10 space-y-10 sm:space-y-32'>
                            {
                                projects.map((project, index) => (
                                    <ProjectCard right={index % 2 === 0} image={project.image} name={project.name} github={project.github}
                                       demo={project.demo} description={project.description} resources={project.resources} />
                                ))
                            }
                        </div>
                    </div>

                    {/* Contact Section  */}
                    <div className='space-y-2 max-w-2xl mt-20 sm:mt-40 pb-20 sm:pb-40 mx-auto text-center'>
                        <p className='text-secondary font-medium text-xs sm:text-lg'>What's Next?</p>
                        <p className='text-2xl sm:text-5xl pb-3 font-semibold'>Get In Touch With Me</p>
                        <p className='text-[#8A93AD] text-sm sm:text-lg'>
                            I am currently looking forward to joining an impact driven organization
                            with a strong vision and clear direction. Kindly reach out to me and
                            I will do my best toget back to you as soon as possible.
                        </p>
                        {/* Contact Me button  */}
                        <div className='pt-5 sm:pt-10'>
                            <a href='mailto:dnettey3@gmail.com' className='font-medium border border-secondary text-secondary px-6 rounded py-3 text-xs sm:text-base'>
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>


                {/* Socials Section  */}
                <SocialsSection />
            </div>
        </div>
    )
}



export default HomePage