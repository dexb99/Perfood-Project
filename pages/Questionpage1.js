import React from 'react'
import Questions from './Components/Questions';
import { Layout } from 'antd';
import questionData from './Components/questionData';
import Link from 'next/link';
import UserNavbar from './Components/userNavbar';
export default function questionPage1() {
    const { Footer } = Layout
    const questions = questionData.slice(0, 4)
    return (
        <>
            <UserNavbar />
            <Questions questions={questions} />
            <main className='h-auto max-h-auto sm:px-0 md:px-[10%] xl:px-[20%]'>
                <Footer className='px-0 bg-honeydew-100 h-[10%] sm:h-[3.3rem] md:h-[6.6rem] xl:h-[10rem] flex justify-center items-center'>
                    <div className='  justify-start w-1/2 flex items-center  main-font'>
                        <Link href="/Homepage" className='flex items-center'>
                            <img className='respon-icon justify-center items-center' src='/previous.svg' />
                            <div className='font-inter foot-font items-center'>
                                หน้าแรก
                            </div>
                        </Link>
                    </div>
                    <div className='justify-end w-1/2 flex items-center  main-font'>
                        <Link className=' items-center foot-font w-auto flex justify-end' href="/Questionpage2">
                            <div>
                                ต่อไป
                            </div>
                            <img className='respon-icon justify-center items-center' src='/Next.svg' />
                        </Link>
                    </div>
                </Footer>
            </main>
        </>

    )
}
