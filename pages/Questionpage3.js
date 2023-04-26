import React from 'react'
import Questions from './Components/Questions';
import { Layout, Space, Col, Row, Button } from 'antd';
import questData from './Components/questData';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import UserNavbar from './Components/userNavbar';
import axios from 'axios';
export default function questionPage1() {
    const data = questData()
    const questions = data.slice(8, 12)
    const { Footer } = Layout
    useEffect(() => {
        window.addEventListener('beforeunload', clearLocalStorage);
        return () => {
            window.removeEventListener('beforeunload', clearLocalStorage);
        }
    }, []);

    const clearLocalStorage = () => {
        localStorage.clear();
    }

    const handleChange = (event) => {
        const defaultRate = JSON.stringify([{ ratingScore: 0 }]);
        localStorage.setItem('rating', defaultRate);
        const quizStr = localStorage.getItem('quiz');
        let quiz = [];
        // If the quiz string is not null or undefined, parse it into a JavaScript object
        if (quizStr) {
            quiz = JSON.parse(quizStr);
        }
        axios.post('http://localhost:3001/quiz', quiz)
            .then((response) => {
                // handle the response from the API endpoint
                const result = response.data;

                const updatedResult = JSON.stringify(result);
                // Store the updated quiz string back in the local storage under the key 'quiz'
                localStorage.setItem('Result', updatedResult);
            })
            .catch((error) => {
                console.error(error); // handle any errors that occur during the request
            });
    };

    return (

        <>
            <UserNavbar />
            <Questions questions={questions} />
            <main className='h-auto max-h-auto sm:px-0 md:px-[10%] xl:px-[20%]'>
                <Footer className='px-5 bg-yellow-600 h-auto sm:h-auto md:h-[6.6rem] xl:h-[10rem] flex justify-center items-center'>
                    <div className=' justify-start w-1/2 flex items-center  main-font'>
                        <Link href="/Questionpage2" className='flex items-center'>
                            <button type="button" class="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2">
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
                                </svg>
                                ก่อนหน้า
                            </button>
                        </Link>
                    </div>
                    <div className='justify-end w-1/2 flex items-center  main-font'>
                        <Link className=' items-center foot-font w-auto flex justify-end' href="/Summary">
                            <button onClick={handleChange} type="button" className="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
                                </svg>
                                ดูผล
                            </button>
                        </Link>
                    </div>
                </Footer>
            </main>
        </>

    )
}