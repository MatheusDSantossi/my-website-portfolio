import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer_with_beard_short_hair_and_glasses_no_bg.png";
import { AnimatedText } from '../components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '../components/icons';
import { HireMe } from '../components/HireMe';
// import lightBulb from '../../public/images/svgs/

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
                <Layout className='pt-0'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='w-1/2'>
                            <Image src={profilePic} alt='matheusd.santosr' width={500}
                            priority
                            sizes="(max-width: 768) 100vw,
                            (max-width: 1200px) 50vw, 50vw
                            "
                            />
                        </div>
                        <div className='w-1/2 flex flex-col items-center self-center'>
                            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left' />
                            <p className='my-4 text-base font-medium'>As a skilled full-stack developer, 
                                I am dedicated to turning ideas 
                                into innovative web applications.
                            </p>
                            <div className='flex items-center self-start mt-2'>
                                <Link href="/dummy.pdf" target={'_blank'}
                                className='flex items-center bg-dark text-light p-2.5 px-6
                                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                                border-2 border-solid border-transparent hover:border-dark
                                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                                hover:dark:border:border-light
                                '
                                download={true}
                                >
                                    Resume <LinkArrow className={"w-6 ml-1"}/>
                                </Link>
                                <Link href="mailto:matheusdsantosr.si@gmail.com" target={"_blank"}
                                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
                <div className='absolute right-8 bottom-8 inline-block w-24'>
                    {/* <Image src={lightBulb} alt="matheusd.santosr" className='w-full h-auto'></Image> */}
                </div>
            </main>
        </>
    )
};


