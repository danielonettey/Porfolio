import React from 'react'

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

export default ExperienceTabs