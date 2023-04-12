import React from 'react'
import { Layout, Space, Col, Row, Button, Radio, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import UserNavbar from './Components/userNavbar';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
export default function Summary() {
    const { Header, Content, Footer } = Layout;
    const [selectedValue, setSelectedValue] = useState(null);
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    // Set Loading time
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
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
            <main className=' h-screen max-h-screen sm:px-[0] md:px-[10%] xl:px-[20%] py-16 '>
                <Header className='bg-darkseagreen  h-[10%] justify-end items-center flex'>
                    <Link className='flex items-center' href="">
                        <div className=' foot-font items-center'>
                            ที่เที่ยวที่เหมาะกับคุณ
                        </div>
                        <img className='responsive-icon justify-center' src='/Suggest.svg' />
                    </Link>
                </Header>
                <Content className='h-[80%] '>
                    <Content className='flex bg-honeydew-100 justify-center items-center h-[60%] '>
                        <div className='text-center bigger-font'>
                            โอ้ววว ยินดีด้วย คุณคือหนึงใน {"<บุคลักษณ์>"}
                        </div>
                    </Content>
                    <Content className='h-[40%] '>
                        <div className=' h-1/2 bg-honeydew-300 justify-center text-center items-center flex foot-font'>
                            คำตอบของเราถูกใจท่านหรือไม่
                        </div>
                        <div className='p-9 px-10  h-1/2 bg-honeydew-200 justify-between items-center flex'>
                        <Rate defaultValue={3} className='h-auto foot-font items-center justify-between  flex w-full' character={({ index }) => customIcons[index + 1]} />
                        </div>
                    </Content>
                </Content>
                <Footer className='bg-darkseagreen  h-[18%] item-center px- flex'>
                    <div className='justify-start w-1/2 flex items-center  main-font'>
                        <Link className=' w-auto items-center flex justify-start' href="/Playgame">
                            <img className=' responsive-icon justify-center items-center' src='/replay.svg' />
                            <div className='foot-font'>
                                เล่นอีกครั้ง
                            </div>
                        </Link>
                    </div>
                    <div className=' justify-end w-1/2 flex items-center  main-font'>
                        <Link className='  items-center w-auto flex justify-end' onClick={showModal} href="">
                            <div className='foot-font'>
                                แชร์
                            </div>
                            <img className='responsive-icon justify-center items-center' src='/share.svg' />
                        </Link>
                    </div>
                </Footer>
            </main>
            {/* Modal setting */}
            <Modal
                className='font-itim'
                title="ชวนเพื่อนของคุณมาลองเล่น"
                footer={[

                ]}
                onCancel={onClose} open={open}>
                <div className='flex justify-center items-center p-1 rounded-lg'>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed border-black border-2'>
                        <Link href="#">
                            facebook
                        </Link>
                    </div>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed border-black border-2'>
                        <Link href="#">
                            line
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center p-1 rounded-lg'>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed border-black border-2'>
                        <Link href="#">
                            tiktok
                        </Link>
                    </div>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed border-black border-2'>
                        <Link href="#">
                            instagram
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center p-1 rounded-lg'>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed border-black border-2'>
                        <Link href="#">
                            snapchat
                        </Link>
                    </div>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed border-black border-2'>
                        <Link href="#">
                            vk
                        </Link>
                    </div>
                </div>
            </Modal>
        </>

    )
}
