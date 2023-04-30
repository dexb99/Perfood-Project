import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserNavbar from './Components/userNavbar';
import axios from 'axios';
import surveyList from './Components/surveyList';
export default function Playgame() {
    const SuveyList = surveyList();
    const [sur, setSur] = useState(`SVY_01`);
    const beginResponse = () => {
        axios.post('http://localhost:3001/createresponse', {
            Survey_ID: sur
        }).then((response) => {
            let quiz = response.data;
            // Convert the updated quiz array to a string using JSON.stringify()
            const updatedQuizStr = JSON.stringify(quiz);
            // Store the updated quiz string back in the local storage under the key 'quiz'
            localStorage.setItem('Response', updatedQuizStr);
        }).catch((error) => {
            console.error('Failed to create response:', error);
        });
    };
    const handdleClick = (surveyID) => {
        setSur(surveyID);
        beginResponse();
    }

    const { Header, Content, Footer } = Layout;
    return (
        <>
            <div className=''>
                <UserNavbar />
            </div>
            <main className=" h-screen sm:px-5 md:px-[10%] xl:px-[20%]">
                {SuveyList.map((survey, index) => (
                    <Layout key={index} className="h-full w-full bg-yellow-100 p-3">
                        {/* <Header className='  bg-transparent h-[10%] justify-end items-center flex'>
                </Header> */}
                        <div className='h-full '>
                            <Content className='h-[80%] '>
                                <Content className=' flex justify-center items-center h-full p-5 '>
                                    <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-10 w-auto h-1/2 border-dashed rounded-lg  font-itim bigger-font '>
                                        <div className='  text-center h-auto w-full'>
                                            {survey.Survey_Name}

                                        </div>
                                    </div>
                                </Content>
                            </Content>
                            <Footer className='bg-transparent h-[20%] item-center px-10 flex'>
                                <div className='w-full h-full flex p-3 rounded-lg justify-between'>
                                    <div className=' border-dashed rounded-lg justify-center w-[49%] px-3 flex items-center  foot-font'>
                                        <Link className=' w-auto items-center flex justify-start' href='/readme'>
                                            <button type="button" className="text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                                                </svg>Read Me</button>
                                        </Link>
                                    </div>
                                    <div className=' border-dashed rounded-lg justify-center w-[49%] px-3 flex items-center  foot-font'>
                                        <Link className=' items-center w-auto main-icon flex justify-end' href='/Questionpage1'>
                                            <button onClick={() => handdleClick(survey.Survey_ID)} type="button" className="text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                </svg>เริ่มกันเลย</button>
                                        </Link>
                                    </div>
                                </div>
                            </Footer>
                        </div>
                    </Layout>
                ))}
            </main>

        </>
    )
}