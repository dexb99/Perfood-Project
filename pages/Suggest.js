import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import Navbar from './Components/Navbar'
import personalData from './Components/personal_Data';
import { useState } from 'react';
export default function Personal() {
    const person = personalData();
    const handleEdit = (event) => {
        console.log(event.target.value)
    }
    const { Header, Content, Footer } = Layout;
    return (
        <>
            <Navbar />
            {console.log(person)}
            <main className=" h-screen pt-16 sm:px-5 md:px-[10%] xl:px-[20%]">
                <Layout className=" sm:px-3 md:px-[2.5%] xl:px-[5%] h-full w-full bg-yellow-100 ">
                    <Header className='   sm:p-1 md:p-[2%] xl:p-[4%] bg-transparent  h-[10%]'>
                        <div className='p-3'>
                            <Button href='/Createpersonal' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500 '>
                                เพิ่มบุคลักษณ์
                            </Button>
                        </div>
                    </Header>
                    <Content className=' h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                        <div className=''>
                            <div className='text-center font-itim main-font font-bold max-sm:text-base bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>รายการบุคลักษณ์</div>
                            {person.map((personal, index) => (
                                <div key={index} className='p-3  '>
                                    <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                        <div className=' w-1/2 text-start font-itim text-yellow-500'>
                                            {personal.Personal_Name}
                                        </div>
                                        <div className=' w-1/2 flex items-center justify-end text-center '>
                                            <div className=' bg-gray-400 rounded-lg p-1 font-itim'>
                                                <Link className='px-5 hover:text-white' value={personal} onClick={handleEdit} href="#">แก้ไข</Link>
                                                <Link className='px-5 hover:text-white' href="#">ลบ</Link>
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