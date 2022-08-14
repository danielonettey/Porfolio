import React from 'react'
import GithubIcon from '../assets/icons/GitHubIcon.png'
import ComputerIcon from '../assets/icons/ComputerIcon.png'


const ProjectCard = ({ image, name, description, demo, github, resources, right }) => {
    return (
        <div className='sm:flex items-center'>
            {/* Image */}
            <div className=' md:w-2/3'>
                <img src={image} className='w-full z-0' />
            </div>

            {/* Details  */}
            <div className={`md:w-1/3 text-center ${right ? 'sm:text-right' : 'sm:text-left order-first z-20'} `}>
                <p className=' text-secondary font-medium pt-2 sm:py-2 text-xs sm:text-base'>Featured Project</p>
                <p className='hover:text-secondary font-semibold text-xl sm:text-3xl'>{name}</p>
                <div className={`${right ? 'sm:-ml-32' : 'sm:-mr-32'} bg-[#112240] my-2 sm:my-4 px-2 py-4 sm:py-7 sm:px-5 rounded shadow`}>
                    <p className='text-white/60 text-sm sm:text-[15px]'>
                        {description}
                    </p>
                </div>

                {/* Resources  */}
                <div className='px-2 flex justify-between text-white font-medium text-xs'>
                    <p className='divide-x divide-white/70 space-x-2'>
                        {
                            resources.map((resource, index) => (
                                <span key={index} className='pl-2 first:pl-0'>{resource}</span>
                            ))
                        }
                    </p>
                </div>

                {/* External Links  */}
                <div className={`flex mt-3 justify-center ${right ? 'sm:justify-end ' : 'sm:justify-start '} space-x-3`}>
                    <a href={github} target="_blank" className="cursor-pointer">
                        <img src={GithubIcon} className=' w-6' />
                    </a>

                    <a href={demo} target="_blank" className="cursor-pointer">
                        <img src={ComputerIcon} className=' w-6' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard