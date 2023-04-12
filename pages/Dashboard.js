import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import Navbar from './Components/Navbar'
import surveyList from './Components/surveyList';
export default function Dashboard() {
    const { Header, Content, Footer } = Layout;
    return (
        <>
            <Navbar />
            <main className=" h-screen pt-16 sm:px-5 md:px-[10%] xl:px-[20%]">
                <Layout className=" sm:px-3 md:px-[2.5%] xl:px-[5%] h-full w-full bg-honeydew-200 ">
                    <Header className='   sm:p-1 md:p-[2%] xl:p-[4%] bg-transparent  h-[10%]'>
                        <div className='p-3'>
                            <Button href='/Create' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full  '>
                                เพิ่มแบบสอบถาม
                            </Button>
                        </div>
                    </Header>
                    <Content className='border-solid h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                        <div className='border-solid border-2'>
                            <div className='text-center font-itim main-font font-bold max-sm:text-base'>รายการแบบสอบถาม</div>
                            {surveyList.map((survey) => (
                                <div key={survey.id} className='p-3 border-solid '>
                                    <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                        <div className=' w-1/2 text-start font-itim'>
                                            {survey.surveyname}
                                        </div>
                                        <div className=' w-1/2 flex items-center justify-end text-center '>
                                            <div className=' bg-gray-400 rounded-lg p-1 font-itim'>
                                                <Link className='px-5 hover:text-white' href="/Edit">แก้ไข</Link>
                                                <Link className='px-5 hover:text-white ' href="#">ลบ</Link>
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
