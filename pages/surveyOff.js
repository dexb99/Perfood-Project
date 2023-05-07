import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserNavbar from '../Components/userNavbar';
import axios from 'axios';
import SurveyList from '../Components/surveyList';
export default function SurveyOff() {
    const Suveylist = SurveyList();
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
                {Suveylist.map((survey, index) => (
                    <Layout key={index} className="h-full w-full bg-yellow-100 p-3">
                        {/* <Header className='  bg-transparent h-[10%] justify-end items-center flex'>
                </Header> */}
                        <div className='h-full '>
                            <Content className='h-[80%] '>
                                <Content className=' flex justify-center items-center h-full p-5 '>
                                    <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center bg-yellow-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-10 w-auto h-1/2 rounded-lg  font-itim minifoot-font border-solid border-yellow-900 border-10 '>
                                        <div className='  text-center h-auto w-full text-white'>
                                            กราบขออภัย Survey นี้ไม่พร้อมให้ใช้บริการ
                                        </div>
                                    </div>
                                </Content>
                            </Content>
                            <Footer className='bg-transparent h-[20%] item-center px-10 flex'>
                                <div className='w-full h-full flex p-3 rounded-lg justify-center'>
                                    <div className='  rounded-lg justify-center w-[49%] px-3 flex items-center  foot-font'>
                                        <Link className=' w-auto items-center flex justify-center' href='/'>
                                            <button type="button" className="text-white border-none bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                                </svg>
                                                หน้าแรก
                                            </button>
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