import React from 'react'
import { PlayCircleFilled, FileOutlined } from '@ant-design/icons'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import UserNavbar from './Components/userNavbar';
import readme from './readme';
import surveyList from './Components/surveyList';
export default function Playgame() {

    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    // Set Modal open
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const { Header, Content, Footer } = Layout;
    return (
        <>
            <div className=''>
                <UserNavbar />
            </div>
            <main className=" h-screen sm:px-5 md:px-[10%] xl:px-[20%]">
                {surveyList.map((survey) => (
                    <Layout key={survey.id} className="h-full w-full bg-honeydew-100 p-3">
                        {/* <Header className='  bg-transparent h-[10%] justify-end items-center flex'>
                </Header> */}
                        <div className='h-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                            <Content className='h-[80%] '>
                                <Content className=' flex justify-center items-center h-full p-5 '>
                                    <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center bg-honeydew-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-10 w-auto h-1/2 border-dashed rounded-lg border-2 border-black font-itim bigger-font '>
                                        <div className='  text-center h-auto w-full'>
                                            {survey.surveyname}
                                        </div>
                                    </div>
                                </Content>
                            </Content>
                            <Footer className='bg-transparent h-[20%] item-center px-10 flex'>
                                <div className='w-full h-full flex p-3 rounded-lg justify-between'>
                                    <div className=' border-dashed border-black bg-honeydew-200 border-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg justify-start w-[49%] px-3 flex items-center  foot-font'>
                                        <Link className=' w-auto items-center flex justify-start' href={survey.readme}>
                                            <img className=' responsive-icon justify-center items-center' src='/Readme.svg' />
                                            <div className=''>
                                                Readme
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=' border-dashed border-black bg-honeydew-200 border-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg justify-end w-[49%] px-3 flex items-center  foot-font'>
                                        <Link className=' items-center w-auto main-icon flex justify-end' href={survey.play}>
                                            <div>
                                                เริ่มกันเลย!!
                                            </div>
                                            <img className='responsive-icon justify-center items-center' src='/Play.svg' />
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
