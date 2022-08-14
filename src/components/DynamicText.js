import React, { useEffect, useState } from 'react'

const DynamicText = () => {
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

        if (wordIndex === 22) {
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

    return (
        <p className='text-2xl sm:text-6xl md:text-7xl font-semibold sm:!leading-tight  h-24 sm:h-80'>
            {welcome.substring(0, 22)}
            <br />
            <span className='text-[#8A93AD]'>
                {welcome.substring(22, welcome.length)}
            </span>
            |
        </p>
    )
}

export default DynamicText