import { BadgeCheckIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import experiences from '../../data/experiences';
import SubHeader from '../SubHeader'

const ExperienceSection = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className='mb-20 sm:my-20 sm:pt-20 max-w-3xl mx-auto'>
            <SubHeader title='Experience' index={2} />

            <div className='sm:grid sm:grid-cols-7'>
                <ExperienceTabs experiences={experiences} setCurrentTab={setCurrentTab} currentTab={currentTab} />
                <ExperienceDetailCard title={experiences[currentTab].title} company={experiences[currentTab].company}
                    duration={experiences[currentTab].duration} roles={experiences[currentTab].roles}
                    extra={experiences[currentTab].extra} />
            </div>
        </div>
    )
}

const ExperienceDetailCard = ({ title, company, duration, roles, extra }) => {
    return (
        <div className='sm:col-span-5 flex flex-col justify-between mt-5 sm:mt-0'>
            <div>
                <p className='pb-0.5 sm:text-xl'>
                    {title} <span className='text-secondary font-semibold'>@ {company}</span>
                </p>
                <p className='text-white/50 text-xs sm:text-sm pb-3 sm:pb-5'>
                    {duration}
                </p>

                <div className='space-y-3 sm:space-y-4'>
                    {
                        roles.map((role, index) => (
                            <div className='flex space-x-2.5 items-start' key={index}>
                                <BadgeCheckIcon className='w-4 sm:w-5 mt-0.5 text-secondary flex-none' />
                                <p className='text-white/80 text-xs sm:text-sm'>
                                    {role}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <p className='text-xs font-medium text-right text-secondary pt-2'>{extra}</p>

        </div>
    )
}

const ExperienceTabs = ({ experiences, setCurrentTab, currentTab }) => {
    return (
        <div className='sm:col-span-2 w-full sm:w-auto overflow-x-auto sm:overflow-visible scroll-smooth no-scrollbar'>
            <div className='flex flex-row sm:flex-col col-span-2 w-[calc(150%)] sm:w-auto pb-4 sm:pb-0'>
                {
                    experiences.map((experience, index) => (
                        <button className={`border-t-2 border-l-0 sm:border-t-0 sm:border-l-2 px-3 sm:pl-5 sm:pr-0
                    text-center sm:text-left text-xs sm:text-sm py-1.5 sm:py-3 
                             ${index === currentTab ? 'border-secondary font-medium' : 'text-white/50 border-white/20'}`}
                            key={index} onClick={() => setCurrentTab(index)}>
                            {experience.company}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default ExperienceSection