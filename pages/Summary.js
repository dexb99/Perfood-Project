import React, { useEffect } from 'react'
import { Layout, Space, Col, Row, Button, Radio, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import UserNavbar from './Components/userNavbar';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import axios from 'axios';
export default function Summary() {
    const { Header, Content, Footer } = Layout;
    const [selectedValue, setSelectedValue] = useState(null);
    const [rating, setRateing] = useState(0);
    const [peResult, setPeResult] = useState([]);
    const [clicked, setClicked] = useState(false);
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
        const ResponseID = JSON.parse(localStorage.getItem('Response'))
        const QuestionData = JSON.parse(localStorage.getItem('quiz'))
        const ResultData = JSON.parse(localStorage.getItem('Result'))
        const ratingData = JSON.parse(localStorage.getItem('rating'))
        ResponseID.map((resid) => {
            console.log(resid.Response_ID)
        })
        QuestionData.map((id) => {
            console.log(id)
            axios.post('http://localhost:3001/questscore', {
                Response_ID: ResponseID[0].Response_ID,
                Question_ID: id.question_ID,
                choice_ID: id.choiceID,
                Question_score: id.question_score
            }).then((response) => {
                console.log(response.data)
            })
        })
        ResultData.map((id) => {
            axios.post('http://localhost:3001/result', {
                Response_ID: ResponseID[0].Response_ID,
                Personal_ID: id.Personal_ID,
                Resultscore: id.totalscore
            }).then((resonse) => {
                console.log(resonse.data)
            })
        })
        ratingData.map((id) => {
            axios.put('http://localhost:3001/rating', { Response_ID: ResponseID[0].Response_ID, User_Rate: id.ratingScore }).then((resonse) => {
                console.log(resonse.data)
            })
        })
    };
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
        setRateing(value);
        const rate = [];
        const newRate = {
            'ratingScore': value
        }
        rate.push(newRate);

        const updateRating = JSON.stringify(rate)
        localStorage.setItem('rating', updateRating);
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
                    <Link className='flex items-center' href="#">
                        <button onClick={insertData} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 to-orange-600 group-hover:from-yellow-400 group-hover:to-orange-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800">
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
                                        </div>,
                                        <div key={index} className='text-black text-center bigger-font'>
                                            {result.Personal_Name}
                                        </div>
                                        <div className='justify-center items-center  flex h-full'>
                                        <img className='w-[50%] h-{50%]' src={`http://localhost:3001/images/${result.Personal_IMG}`}/>
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
                        <Link className=' w-auto items-center flex justify-start' href="/Playgame">
                            <button onClick={handleReset} type="button" className="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                                เล่นอีกครั้ง
                            </button>
                        </Link>
                    </div>
                    <div className=' justify-end w-1/2 flex items-center  main-font'>
                        <Link className='  items-center w-auto flex justify-end' onClick={showModal} href="">
                            <button type="button" className="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
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
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed '>
                        <Link href="#">
                            <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                                แชร์ผ่าน Facebook
                            </button>
                        </Link>
                    </div>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed '>
                        <Link href="#">
                            <button type="button" className="text-white bg-green-500 hover:bg-green-500/90 focus:ring-4 focus:outline-none focus:ring-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2 -ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"></path>
                                </svg>
                                Sign in with Line
                            </button>
                        </Link>
                    </div>
                    
                </div>

                <div className='flex justify-center items-center p-1 rounded-lg'>
                    <div className='flex justify-center w-1/2 px-3 rounded-lg border-dashed '>
                        <Link href="#">
                            <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
                                Sign in with Twitter
                            </button>
                        </Link>
                    </div>

                </div>
            </Modal>
        </>

    )
}