import React from 'react'
import { PlayCircleFilled, FileOutlined } from '@ant-design/icons'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserNavbar from './Components/userNavbar';

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
                                    <div key={index} className='text-center font-itim bigger-font '>
                                        <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center w-auto h-1/2 rounded-lg  font-itim bigger-font '>
                                            <img class=" " src={`http://localhost:3001/images/${result.Suggest_IMG}`} alt="image description" />
                                        </div>
                                    </div>
                                )
                            })}

                        </Content>
                    </Content>
                    <Footer className='bg-yellow-600  h-[15%] item-center px- flex'>
                        <div className='justify-start w-1/2 flex items-center  main-font'>
                            <Link className=' w-auto items-center flex justify-start' href="/">
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
                        <Link href="#">
                            <button type="button" className="text-white font-itim bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                                แชร์ผ่าน Facebook
                            </button>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
    )
}