import React from 'react'
import { Layout, Tooltip } from 'antd';
import Link from 'next/link';
import Navbar from './Components/Navbar'
import surveyList from './Components/surveyList';
import { Switch } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Dashboard() {
    const survey = surveyList();
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (survey.length > 0) {
            setStatus(survey[0].Survey_Status)
        }
    }, [survey])
    console.log(survey)
    const changeStatus = (surveyId, currentStatus) => {
        const newStatus = currentStatus === 'on' ? 'off' : 'on';
        axios.put(`http://localhost:3001/updateStatus/${surveyId}`, {
            status: newStatus
        }).then((response) => {
            setStatus(newStatus)
        })
        console.log(newStatus)
    };

    const handleEdit = (event) => {
        console.log('hello')
        const PersonalID = [{
            "SUR_ID": event.target.id
        }];
        const setLocalPerID = JSON.stringify(PersonalID)
        localStorage.setItem('SUR_ID', setLocalPerID)
    }
    const { Header, Content, Footer } = Layout;
    return (
        <>
            <Navbar />
            <main className=" h-screen pt-16 sm:px-5 md:px-[10%] xl:px-[20%]">
                <Layout className=" sm:px-3 md:px-[2.5%] xl:px-[5%] h-full w-full bg-yellow-100 ">

                    <Content className=' h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                        <div className='border-solid border-2 border-gray-300 '>

                            <div className='text-center font-itim main-font font-bold max-sm:text-base bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>รายการแบบสอบถาม</div>
                            {survey.map((survey, index) => (
                                <div key={index} className='p-3'>
                                    <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                        <div className=' w-1/2 text-start font-itim text-yellow-500'>
                                            {survey.Survey_Name}
                                        </div>
                                        <div className=' w-1/2 flex items-center justify-end text-center '>

                                            <div className='px-3 flex rounded-lg p-1'>
                                                <Tooltip placement='top' title={status === "on" ? "แบบสอบถาม เปิดอยู่" : "แบบสอบถาม ปิดอยู่"} overlayClassName='font-itim'>
                                                    <Switch onClick={() => changeStatus(survey.Survey_ID, status)} checked={status === 'on'} />
                                                </Tooltip>
                                            </div>
                                            <div className=' bg-gray-400 rounded-lg p-1 font-itim'>
                                                <Link className='px-5 hover:text-white' id={survey.Survey_ID} onClick={handleEdit} href="/Edit">แก้ไข</Link>
                                                {/* <Link className='px-5 hover:text-white ' id={survey.Survey_ID} onClick={handleDelete} href="#">ลบ</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </Content>
                </Layout>
            </main>
        </>
    )
}