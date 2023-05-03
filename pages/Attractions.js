import React from 'react'
import { PlayCircleFilled, FileOutlined } from '@ant-design/icons'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserNavbar from './Components/userNavbar';
import {
    FacebookShareButton,
    FacebookIcon,
} from 'next-share'
export default function Attractions() {
    const { Header, Content, Footer } = Layout;
    // display
    // Set Loading time
    const [peResult, setPeResult] = useState([]);
    useEffect(() => {
        const resultStr = localStorage.getItem('Result');
        if (resultStr) {
            setPeResult(JSON.parse(resultStr));
        }
    }, []);

    // Set Modal open
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleReset = () => {
        localStorage.clear();
    };
    return (
        <>
            <UserNavbar />
            <main className=" bg-cover h-auto sm:px-5 md:px-[10%] xl:px-[20%] py-16">
                <Layout className="h-full w-full bg-yellow-100">
                    <Header className=' bg-transparent h-[10%] justify-center items-center flex'>
                        <div className=' font-itim bigger-font'>
                            ที่เที่ยวที่เหมาะกับคุณ
                        </div>
                    </Header>
                    <Content className='h-[70%] '>

                        <Content className='flex justify-center items-center h-full '>
                            {peResult.map((result, index) => {
                                return (
                                    <div key={index} className='flex text-center font-itim bigger-font '>
                                        <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center w-1/2 h-1/2 rounded-lg  font-itim bigger-font '>
                                            <img class="w-1/2" src={`http://localhost:3001/images/${result.Suggest_IMG}`} alt="image description" />
                                        </div>
                                        <div className='w-1/2 sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center h-1/2 rounded-lg  font-itim bigger-font '>
                                            <img class=" w-1/2" src={`http://localhost:3001/images/${result.Personal_IMG}`} alt="image description" />
                                        </div>
                                    </div>
                                )
                            })}

                        </Content>
                    </Content>
                    <Footer className='bg-yellow-600  h-[15%] item-center px- flex'>
                        <div className='justify-start w-1/2 flex items-center  main-font'>
                            <Link onClick={handleReset} className=' w-auto items-center flex justify-start' href="/">
                                <button type="button" class="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                    หน้าแรก
                                </button>
                            </Link>
                        </div>
                        <div className=' justify-end w-1/2 flex items-center  main-font'>
                            <Link className='  items-center w-auto flex justify-end' onClick={showModal} href="">
                                <button type="button" class="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                    แชร์
                                </button>
                            </Link>
                        </div>
                    </Footer>

                </Layout>
            </main>
            {/* Modal setting */}
            <Modal
                className='font-itim '
                title="ชวนเพื่อนของคุณมาลองเล่น"
                footer={[

                ]}
                onCancel={onClose} open={open}>
                <div className='flex justify-center items-center p-1 rounded-lg '>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg '>

                        <FacebookShareButton
                            url={'https://github.com/'}
                            quote={'next-share is a social share buttons for your next React apps.'}
                            picture={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>

                    </div>
                </div>
            </Modal>
        </>
    )
}