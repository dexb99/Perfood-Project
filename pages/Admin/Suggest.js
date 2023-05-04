import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import Navbar from '../Components/Navbar'
import personalData from '../Components/personal_Data';
import axios from 'axios';
export default function Suggest() {
    const person = personalData();
    const handleEdit = (event) => {
        const PersonalID = [{
            "PER_ID": event.target.id
        }];
        const setLocalPerID = JSON.stringify(PersonalID)
        localStorage.setItem('PER_ID', setLocalPerID)
    }
    const { Header, Content, Footer } = Layout;

    return (
        <>
            <Navbar />
            <main className="  h-screen pt-16 sm:px-5 md:px-[10%] xl:px-[20%]">
                <Layout className=" sm:px-3 md:px-[2.5%] xl:px-[5%] h-full w-full bg-yellow-100 ">
                    <Header className='   sm:p-1 md:p-[2%] xl:p-[4%] bg-transparent  h-[10%]'>
                    </Header>
                    <Content className=' h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                        <div className=''>
                            <div className='text-center font-itim main-font font-bold max-sm:text-base bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>รูปแนะนำการท่องเที่ยว</div>
                            {person.map((personal, index) => (
                                <div key={index} className='p-3 '>
                                    <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                        <div className=' w-1/2 text-start font-itim text-yellow-500'>
                                            {personal.Personal_Name}
                                        </div>
                                        <div className=' w-1/2 flex items-center justify-end text-center '>
                                            <div className='flex bg-gray-400 rounded-lg p-1 font-itim'>
                                                <div>
                                                    <Link className='px-5 hover:text-white' id={personal.Personal_ID} onClick={handleEdit} href="/Editsuggest">เพิ่ม/แก้ไขรูป</Link>
                                                </div>
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