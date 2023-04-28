import React from 'react'
import { useState, useEffect } from 'react';
import Questions from './Components/Questions';
import { Layout } from 'antd';
import Link from 'next/link';
import UserNavbar from './Components/userNavbar';
import questData from './Components/questData';
export default function questionPage1() {
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const { Footer } = Layout
    const data = questData();
    // useEffect(()=>{
    //     setCombineData();
    // },[])
    const [quest, setQuest] = useState([]);
    function handleAnswerSeleted(quest) {
        setQuest(quest);
    }
    const questions = data.slice(0, 4)
    console.log(data)

    useEffect(() => {
        window.addEventListener('beforeunload', clearLocalStorage);
        return () => {
            window.removeEventListener('beforeunload', clearLocalStorage);
        }
    }, []);
    const clearLocalStorage = () => {
        localStorage.clear();
    }
    return (
        <>
            <UserNavbar />
            <Questions questions={questions} />
            <main className='h-auto max-h-auto sm:px-0 md:px-[10%] xl:px-[20%]'>
                <Footer className='px-5 bg-yellow-600 h-auto sm:h-auto md:h-[6.6rem] xl:h-[10rem] flex justify-center items-center'>
                    <div className=' justify-start w-1/2 flex items-center  main-font'>
                        <Link href="/" className='flex items-center'>
                            <button type="button" className="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2">
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                                หน้าแรก
                            </button>
                        </Link>
                    </div>
                    <div className='justify-end w-1/2 flex items-center  main-font'>
                        <Link className=' items-center foot-font w-auto flex justify-end' href="/Questionpage2">
                            <button type="button" className="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
                                </svg>
                                ถัดไป
                            </button>
                        </Link>
                    </div>
                </Footer>
            </main>
        </>

    )
}