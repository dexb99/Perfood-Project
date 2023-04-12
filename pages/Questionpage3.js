import React from 'react'
import Questions from './Components/Questions';
import { Layout, Space, Col, Row, Button } from 'antd';
import questionData from './Components/questionData';
import Link from 'next/link';
import UserNavbar from './Components/userNavbar';
export default function questionPage1() {
    const questions = questionData.slice(8, 12)
    const { Footer } = Layout
    return (
        <>
        <UserNavbar/>
            <Questions questions={questions} />
            <main className='h-auto max-h-auto sm:px-0 md:px-[10%] xl:px-[20%]'>
                <Footer className='px-5 bg-honeydew-100 h-[3.3rem] sm:h-[3.3rem] md:h-[6.6rem] xl:h-[10rem] flex justify-center items-center'>
                <div className=' justify-start w-1/2 flex items-center  main-font'>
                <Link href="/Questionpage2" className='flex items-center'>
                        <img className='respon-icon justify-center items-center' src='/previous.svg' />
                        <div className='font-inter foot-font items-center'>
                            ก่อนหน้า
                        </div>
                    </Link>
                </div>
                <div className='justify-end w-1/2 flex items-center  main-font'>
                    <Link className=' items-center foot-font w-auto flex justify-end' href="/Summary">
                        <div>
                            ถัดไป
                        </div>
                        <img className='respon-icon justify-center items-center' src='/Next.svg' />
                    </Link>
                </div>
                </Footer>
            </main>
        </>

    )
}