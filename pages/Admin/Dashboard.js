import React from 'react';
import { Col, Row, Image, Button, Layout, Drawer, Tooltip } from 'antd';
import { Chart } from "chart.js";
import personalData from '../Components/personal_Data';
import UserNavbar from '../Components/userNavbar';
import Navbar from '../Components/Navbar';
import Link from 'next/link';
import Table1 from '../Components/Table';
import Barchart from '../Components/Barchart';
import surveyList from '../Components/surveyList';
import NumBer from '../Components/NumBer'
import { Switch } from 'antd';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
export default function Dashboard() {
    const survey = surveyList();
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (survey.length > 0) {
            setStatus(survey[0].Survey_Status)
        }
    }, [survey])
    console.log(survey)
    const changeStatus = (surveyId, currentStatus) => {
        const newStatus = currentStatus === 'on' ? 'off' : 'on';
        axios.put(`http://localhost:3001/updateStatus/${surveyId}`, {
            status: newStatus
        }).then((response) => {
            setStatus(newStatus)
        })
        console.log(newStatus)
    };
    const handleEdit = (event) => {
        console.log('hello')
        const PersonalID = [{
            "SUR_ID": event.target.id
        }];
        const setLocalPerID = JSON.stringify(PersonalID)
        localStorage.setItem('SUR_ID', setLocalPerID)
        Router.push('/Admin/Edit')
    }
    const handleDelete = (event) => {
        const id = event.target.id
        Modal.confirm({
            className: "font-itim",
            title: "คุณแน่ใจหรอว่าจะลบข้อมูล",
            onOk: () => {
                // axios.delete(`http://localhost:3001/deletePERSONAL/${id}`).then((response) => {
                //     console.log('Personal Deleted')
                // })
                // window.location.reload();
            },
            onCancel: () => { },
            okButtonProps: {
                className: "text-black shadow-sm border-black bg-red-100"
            }
        });
    }

    const { Header, Content, Footer } = Layout;
    const Personaldata = personalData();
    const [selectedPersonal, setSelectedPersonal] = useState(null);
    const showDrawer = (personal) => {
        setSelectedPersonal(personal);
    };

    const onClose = () => {
        setSelectedPersonal(null);
    };

    return (
        <>
            <Navbar />
            <Layout className='h-full px-5 sm:px-5 md:px-[10%] xl:px-[20%] overflow-auto bg-yellow-100'>
                <Header className=' bg-transparent' />
                <Content className='w-full h-full bg-yellow-100 flex justify-center items-center'>
                    <Row className='w-full h-auto flex'>
                        {/* <Table1/> */}

                        <Col className='w-full flex justify-center  md:w-1/2 sm:w-1/2'>
                            <NumBer />
                        </Col>
                        <Col className='w-full flex justify-center  md:w-1/2 sm:w-1/2'>
                            <Barchart />
                        </Col>

                    </Row>
                </Content>
                <Content className=' h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                    <div className='h-auto'>
                        <div className='text-center font-itim main-font font-bold max-sm:text-base bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>รายการแบบสอบถาม</div>
                        {survey.map((survey, index) => (
                            <div key={index} className='p-3'>
                                <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                    <div className=' w-1/2 text-start font-itim text-yellow-500'>
                                        {survey.Survey_Name}
                                    </div>
                                    <div className=' w-1/2 flex items-center justify-end text-center '>

                                        <div className='px-3 flex rounded-lg p-1'>
                                            <Tooltip placement='top' title={status === "on" ? "แบบสอบถาม เปิดอยู่" : "แบบสอบถาม ปิดอยู่"} overlayClassName='font-itim'>
                                                <Switch onClick={() => changeStatus(survey.Survey_ID, status)} checked={status === 'on'} />
                                            </Tooltip>
                                        </div>
                                        <div className=' bg-gray-400 rounded-lg p-1 font-itim'>
                                            <Link className='px-5 hover:text-white' id={survey.Survey_ID} onClick={handleEdit} href="#">แก้ไข</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Content>
                <Footer className='bg-yellow-100 flex justify-center items-center w-full p-0'>

                </Footer>

            </Layout>
        </>
    );
}