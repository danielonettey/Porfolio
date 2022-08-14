import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import PortfolioImage from '../assets/images/portofolio1.png'
import KalanguImage from '../assets/images/kalangu.png'
import ProjectCard from '../components/ProjectCard'


// https://brittanychiang.com/

const HomePage = () => {
    const welcomeText = "Daniel Okaitei Nettey. I love implementing designs for applications!"
    const [welcome, setWelcome] = useState("")
    const [wordIndex, setWordIndex] = useState(1)
    const [add, setAdd] = useState(true);

    // Typing Effect 
    useEffect(() => {
        const timer = setTimeout(() => {
            if (wordIndex <= welcomeText.length) {
                setWelcome(welcomeText.substring(0, wordIndex))
            }
        }, 100);

        if (wordIndex === 14) {
            setAdd(true)
        }

        if (wordIndex === welcomeText.length) {
            setTimeout(() => {
                setAdd(false)
            }, 5 * 100)
        }

        return () => {
            clearInterval(timer);
        }
    }, [wordIndex, add])


    // Add or remove text using typing effect 
    useEffect(() => {
        if (wordIndex === welcomeText.length) {
            setTimeout(() => {
                setWordIndex(wordIndex - 1)
            }, 2 * 1000)
        }
        setWordIndex(add ? wordIndex + 1 : wordIndex - 1)

    }, [welcome])

    const projects = [
        {
            image: PortfolioImage,
            name: 'Portfolio Project',
            description: 'A web application (this project)  which showcases the portfolio of Daniel Nettey to potential recruiters and others to get to know more about the frontend developer.',
            resources: ['React', 'Styled Components', 'TailWind CSS', 'ReactQuery', 'REST APIs']
        },
        {
            image: KalanguImage,
            name: 'Ashesi Kalangu',
            description: 'A web application (this project)  which showcases the portfolio of Daniel Nettey to potential recruiters and others to get to know more about the frontend developer.',
            resources: ['React', 'Styled Components', 'TailWind CSS', 'ReactQuery', 'REST APIs']
        },
        {
            image: PortfolioImage,
            name: 'Portfolio Project',
            description: 'A web application (this project)  which showcases the portfolio of Daniel Nettey to potential recruiters and others to get to know more about the frontend developer.',
            resources: ['React', 'Styled Components', 'TailWind CSS', 'ReactQuery', 'REST APIs']
        }
    ]


    return (
        <div className='bg-backColor text-white'>
            <div className='container mx-auto px-4 relative'>
                <Navbar />
                <div className='max-w-5xl mx-auto'>
                    <div className='space-y-5  py-28'>
                        <p className='text-xl text-secondary font-medium'>Hi, my name is</p>
                        <p className='text-2xl sm:text-6xl md:text-7xl font-semibold leading-snug h-80'>
                            {welcome.substring(0, 22)}
                            <br />
                            <span className='text-[#8A93AD]'>
                                {welcome.substring(22, welcome.length)}
                            </span>
                            |
                        </p>
                        <p className='text-xl leading-8 max-w-4xl'>
                            I am a frontend engineer with expertise in translating UI/UX wireframes to
                            exceptional and high quality code. Currently, I am focused on building
                            an online course learning platform for the
                            <span className='text-secondary'> disabled pre-university</span> students
                            in <span className='text-secondary'>Africa</span>.
                        </p>
                    </div>

                    {/* Project Section  */}
                    <div className='my-20 pt-20'>
                        <p className='text-4xl font-semibold'>
                            <span className='text-secondary '>03. </span>
                            Projects
                        </p>

                        <div className='mt-10 space-y-32'>
                            {
                                projects.map((project, index) => (
                                    <ProjectCard right={index % 2 === 0} image={project.image} name={project.name}
                                        description={project.description} resources={project.resources} />
                                ))
                            }
                        </div>
                    </div>

                    {/* Contact Section  */}
                    <div className='space-y-2 max-w-3xl mt-40 pb-40 mx-auto text-center'>
                        <p className='text-secondary font-medium text-lg'>What's Next?</p>
                        <p className='text-5xl pb-3 font-semibold'>Get In Touch With Me</p>
                        <p className='text-[#8A93AD] text-lg'>
                            I am currently looking forward to joining an impact driven organization
                            with a  <br /> strong vision and clear direction. Kindly reach out to me and
                            I will do <br /> my best toget back to you as soon as possible.
                        </p>
                        {/* Contact Me button  */}
                        <div className='pt-10'>
                            <a href='mailto:dnettey3@gmail.com' className='font-medium border border-secondary text-secondary px-6 rounded py-3'>
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>


                {/* Socials Section  */}
                <div className='fixed bottom-0 '>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <div className='h-28 w-px bg-white'></div>

                </div>
            </div>
        </div>
    )
}



export default HomePage