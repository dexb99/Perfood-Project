import React from 'react'
import { PlayCircleFilled, FileOutlined } from '@ant-design/icons'
import { Layout, Button, Drawer, Modal, Form, Input, Row, Col } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserNavbar from '../Components/userNavbar';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
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
    const title = "Perfood Chiangkan";
    const description = "แบบทดสอบค้นหาบุคลักษณ์ในตัวคุณ แบบ 300 %";
    const image = "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png";
    const url = "https://bkhighlights2021.wixsite.com/";
    return (
        <>
            <Head>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
            </Head>
            <UserNavbar />
            <main className=" bg-cover h-auto sm:px-5 md:px-[10%] xl:px-[20%] py-16">
                <Layout className="h-full w-full bg-yellow-100">
                    <Header className=' bg-transparent h-[10%] justify-center items-center flex p-5'>
                        <div className=' font-itim foot-font text-center'>
                            ที่เที่ยวที่เหมาะกับคุณ
                        </div>
                    </Header>
                    <Content className='h-[70%] '>

                        <Content className='flex justify-center items-center h-full '>
                            {peResult.map((result, index) => {
                                return (
                                    <Row key={index} className='flex text-center font-itim bigger-font w-full h-auto'>
                                        <Row className='w-full sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center h-1/2 rounded-lg  font-itim bigger-font '>
                                            <img class=" w-1/4" src={`http://localhost:3001/images/${result.Personal_IMG}`} alt="image description" />
                                        </Row>
                                        <Row className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center w-full h-1/2 rounded-lg  font-itim bigger-font '>
                                            <img class="w-1/2" src={`http://localhost:3001/images/${result.Suggest_IMG}`} alt="image description" />
                                        </Row>

                                    </Row>
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
                            url={url}
                            quote={description}>
                            <div className='font-itim'>
                                แชร์ไปยัง
                            </div>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>

                    </div>
                </div>
            </Modal>
        </>
    )
}