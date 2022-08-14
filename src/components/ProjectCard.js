import React from 'react'
import GithubIcon from '../assets/icons/GitHubIcon.svg'

const ProjectCard = ({ image, name, description, hosted, resources, right }) => {
    return (
        <div className='flex items-center'>
            {/* Image of Project */}
            <div className='md:w-2/3'>
                <img src={image} className='w-full z-0' />
            </div>

            <div className={`md:w-1/3 ${right ? 'text-right ' : 'order-first text-left z-10'} `}>
                <p className=' text-secondary font-medium pb-2'>Featured Project</p>
                <p className='hover:text-secondary font-semibold text-3xl'>{name}</p>
                <div className={`${right ? '-ml-32' : '!-mr-32'} bg-[#112240] my-4  py-7 px-5 rounded shadow`}>
                    <p className='text-white/60 '>
                        {description}
                    </p>
                    {/* <p className='text-white pt-2'>This is hosted on the netlify platform.</p> */}
                </div>
                <div className='px-2 flex justify-between text-white/70 font-medium text-xs'>
                    <p className='divide-x divid space-x-2'>
                      {
                        resources.map((resource, index) => (
                            <span className='pl-2 first:pl-0'>{resource}</span>
                        ))
                    }  
                    </p>
                    
                    {/* <p>React, Styled Components, TailWind CSS, ReactQuery, REST APIs</p> */}
                    {/* <p>Styled Components</p>
                    <p>TailWind CSS</p>
                    <p>ReactQuery</p>
                    <p>REST APIs</p> */}
                </div>
                <div className={`flex mt-3 justify-${right && 'end '} `}>
                    <img src={GithubIcon} className='text-white' />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard