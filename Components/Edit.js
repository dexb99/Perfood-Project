import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber, message, Upload } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import surveyList from './Components/surveyList';
export default function CreatePersonal() {

    const { TextArea } = Input;
    return (
        <>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-screen bg-yellow-200'>
                    <Form.Item className=' p-4 h-auto bg-transparent '>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <Input placeholder="ชื่อบุคลักษณ์" className='font-itim rounded-lg border-2' />
                        </Form.Item>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <InputNumber placeholder="เกณฑ์คะแนน(ค่ามากสุด)" className='font-itim rounded-lg w-full border-2' />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className='flex justify-center '>
                            <div
                                className='p-2 border-solid bg-yellow-300 h-[35%] max-sm:w-[35%] md:w-[35%] xl:w-[35%] justify-center items-center'>
                                <div className='justify-center items-center border-dashed bg-yellow-100 rounded-lg p-2 h-full sm:p-0 md:p-[4%] xl:p-[8%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                                    <div className=' justify-center items-center  flex h-full'>
                                        <img className='w-[100%] h-{100%]' src={'/personal1.png'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className='font-itim'>
                            ข้อมูลบุคลักษณ์
                        </div>
                        <TextArea placeholder='ข้อมูลบุคลักษณ์' className='font-itim'>
                            
                        </TextArea>
                    </Form.Item>
                    <Form.Item className='p-4 bg-transparent'>
                        <Button className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full  '>
                            บันทึก
                        </Button>
                    </Form.Item>
                </Form>
            </main>

        </>
    )
}
