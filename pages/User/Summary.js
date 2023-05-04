import React, { useEffect } from 'react'
import { Layout, Space, Col, Row, Button, Radio, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import UserNavbar from '../Components/userNavbar';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import axios from 'axios';
import surveyList from '../Components/surveyList';
import Router  from 'next/router';
export default function Summary() {
    const SurveyList = surveyList();
    useEffect(() => {
        SurveyList.map(survey => {
            if (survey.Survey_Status === "off") {
                Router.push('/surveyOff')
            }
        })
    })
    const { Header, Content, Footer } = Layout;
    const [peResult, setPeResult] = useState([]);
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };
    const afterclick = () => {
        window.location.reload();
    }
    const insertData = () => {


    };
    useEffect(() => {
        insertData();
    })
    // Set Loading time
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const rateingChange = (value) => {
        const ResponseID = JSON.parse(localStorage.getItem('Response'))
        const rate = [];
        const newRate = {
            'ratingScore': value
        }
        rate.push(newRate);
        const updateRating = JSON.stringify(rate)
        localStorage.setItem('rating', updateRating);
        const ratingData = JSON.parse(localStorage.getItem('rating'))
        ratingData.map((id) => {
            axios.put('http://localhost:3001/rating', {
                Response_ID: ResponseID[0].Response_ID,
                User_Rate: id.ratingScore
            }).then((resonse) => {
            })
        })
    }
    const getResult = () => {
        localStorage.removeItem('quiz')
        localStorage.removeItem('rating')
        Router.push('/User/Attractions')
    }
    useEffect(() => {
        const resultStr = localStorage.getItem('Result');
        if (resultStr) {
            setPeResult(JSON.parse(resultStr));
        }
    }, []);

    const handleReset = () => {
        localStorage.clear();
    };

    return (
        <>
            <UserNavbar />
            <main className=' h-auto max-h-auto sm:px-[0] md:px-[10%] xl:px-[20%] py-16 '>
                <Header className='bg-yellow-600  h-[15%] justify-end items-center flex'>
                    <Link onClick={getResult} className='flex items-center' href="#">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 to-orange-600 group-hover:from-yellow-400 group-hover:to-orange-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800">
                            <span className="relative px-10 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                ที่เที่ยวที่เหมาะกับคุณ
                            </span>
                        </button>
                    </Link>
                </Header>
                <Content className='h-[80%] '>
                    <Content className=' bg-yellow-200 justify-center items-center h-[60%] '>
                        <Row className='flex justify-center'>
                            {/* <Button className=' text-black flex border-none h-auto shadow-md ' onClick={afterclick}>กด เพื่อ ดูผลลัพท์</Button> */}
                        </Row>
                        <Row className='flex justify-center items-center h-[80%]'>
                            {
                                peResult.map((result, index) => (
                                    <div>
                                        <div key={index} className='text-center bigger-font'>
                                            ว้าว ยินดีต้อนสู่
                                        </div>
                                        <div key={index} className='text-black text-center bigger-font'>
                                            {result.Personal_Name}
                                        </div>
                                        <div className='justify-center items-center  flex h-full'>
                                            <img className='w-[50%] h-{50%]' src={`http://localhost:3001/images/${result.Personal_IMG}`} />
                                        </div>
                                    </div>
                                ))
                            }
                        </Row>
                    </Content>
                    <Content className='h-[40%] '>
                        <div className=' h-1/2 bg-yellow-500 justify-center text-center items-center flex foot-font text-white'>
                            คำตอบของเราถูกใจท่านหรือไม่
                        </div>
                        <div className='p-9 px-10  h-1/2 bg-yellow-100 justify-between items-center flex'>
                            <Rate
                                defaultValue={3}
                                className='h-auto foot-font items-center justify-between  flex w-full '
                                character={({ index }) => customIcons[index + 1]}
                                onChange={rateingChange} />
                        </div>
                    </Content>
                </Content>
                <Footer className='bg-yellow-600  h-[15%] item-center px- flex'>
                    <div className='justify-start w-1/2 flex items-center  main-font'>
                        <Link className=' w-auto items-center flex justify-start' href="/">
                            <button onClick={handleReset} type="button" className="border-none text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                เล่นอีกครั้ง
                            </button>
                        </Link>
                    </div>
                    <div className=' justify-end w-1/2 flex items-center  main-font'>
                        <Link className='  items-center w-auto flex justify-end' onClick={showModal} href="">
                            <button type="button" className="text-white bg-gradient-to-br border-none from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                แชร์
                            </button>
                        </Link>
                    </div>
                </Footer>
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