import React from 'react'
import GithubIcon from '../../assets/icons/GitHubIcon.png'
import LinkedInIcon from '../../assets/icons/LinkedinIcon.png'
import EmailIcon from '../../assets/icons/EmailIcon.png'


const SocialsSection = () => {
    const socialLinks = [
        {
            image: GithubIcon,
            url: 'https://github.com/danielonettey/',
        },
        {
            image: LinkedInIcon,
            url: 'https://www.linkedin.com/in/danielnettey/',
        },
        {
            image: EmailIcon,
            url: 'mailto:dnettey3@gmail.com',
        },
    ]
    return (
        <>
            <div className='hidden lg:flex fixed bottom-0 space-y-6 left-10 flex-col items-center z-40'>
                {
                    socialLinks.map((socialLink, index) => (
                        <a href={socialLink.url} key={index} target="_blank" className="cursor-pointer">
                            <img src={socialLink.image} className=' w-6' />
                        </a>
                    ))
                }
                <div className='h-28 w-px bg-white'></div>
            </div>

            <div className='hidden lg:flex fixed bottom-0 flex-col items-center -right-10 z-40'>
                <a href='mailto:danielonettey@gmail.com' className='rotate-90 mb-28 text-sm text-white/80 hover:text-secondary'>
                    danielonettey@gmail.com
                </a>  
                <div className='h-28 w-px bg-white'></div>
            </div>
        </>
    )
}

export default SocialsSection