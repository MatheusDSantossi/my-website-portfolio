import Head from 'next/head'
import { React, useRef, useEffect } from 'react'
import { AnimatedText } from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer_with_beard_and_glasses_an_abstrac.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Skills } from '../components/Skills'
import Experiences from '../components/Experiences'
import Education from '../components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            // console.log(latest);
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>
};

const about = () => {
  return (
    <>
        <Head>
            <title>matheusd.santosr | About Page</title>
            <meta name='description' content='descriptions'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            
                            My name is Matheus, and I am in the 10th semester of my Information Systems degree at UFRPE - UAST. 
                            Iw have had various experiences both academically and personally, and I can say that I evolve with each new experience. 
                            I love programming with a focus on Full Stack development, it's just amazing when I can work with data and programming. 
                        </p>
                        <p className='font-medium'>
                            Currently, I am a intern at a company that provides services to various partners, and I have gained experience in multiple areas. 
                            Additionally, I am participating in two incredible projects. One is focused on TOTVS Protheus, where we are implementing and improving the accounting 
                            processes of a company, with opportunities to work in the accounting, purchasing, finance, and HR department. 
                            I joined the project with no prior knowledge, and today I can say that I am capable of leading it. 
                        </p>
                        <p className='my-4 font-medium'>
                            The other project involves creating a website using Hostinger, 
                            which requires various tools and skills to ensure its organized development. I have also worked as an apprentice in the production area, during a short period, 
                            I had the opportunity to study and work with spreadsheets and VBA, as well as briefly explore Power BI. I feel more than prepared to continue my career and face new challenges.

                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid borde-dark
                    bg-light p-8 
                    '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>

                        <Image src={profilePic} alt='matheusd.santosr' className='w-full h-auto rounded-2xl'></Image>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={30}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={50}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experiences />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about;
