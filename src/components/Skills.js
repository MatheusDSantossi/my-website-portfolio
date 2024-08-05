import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{ x: x, y: y, transition: {duration: 1.5}}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    );
};

export const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            >
                Full-Stack+Data Analyst
            </motion.div>

            <Skill name="Python" x="-20vw" y="2vw"></Skill>
            <Skill name="Java" x="-5vw" y="-10vw"></Skill>
            <Skill name="JavaScript" x="20vw" y="6vw"></Skill>
            <Skill name="Power BI" x="0vw" y="12vw"></Skill>
            <Skill name="ReactJS" x="-15vw" y="-15vw"></Skill>
            <Skill name="Figma" x="15vw" y="-12vw"></Skill>
            <Skill name="Firebase" x="32vw" y="-5vw"></Skill>
            <Skill name="Flutter" x="0vw" y="-19vw"></Skill>
            <Skill name="Tableau" x="0vw" y="22vw"></Skill>
            <Skill name="SQL" x="25vw" y="18vw"></Skill>
            <Skill name="PHP" x="-17vw" y="-25vw"></Skill>
            <Skill name="HTML" x="-15vw" y="15vw"></Skill>
            <Skill name="CSS" x="13vw" y="-21vw"></Skill>
        </div>
    </>
  )
}
