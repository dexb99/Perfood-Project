import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import questData from './Components/questData';
export default function Create() {
    const questid = questData();
    const { Option } = Select;
    const [queston, setQueston] = useState();
    const qindex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const choices = ['A', 'B', 'C', 'D'];
    let pattern = [];
    for (let i = 0; i < qindex.length; i++) {
        for (let j = 0; j < choices.length; j++) {
            pattern = [`${qindex[i]}${choices[j]}`];

        }
    }
    console.log(pattern)
    return (
        <>
            <Navbar />

            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
                    <Form.Item className=' p-4 h-auto bg-transparent '>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <Input placeholder="หัวข้อแบบสอบถาม" className='font-itim rounded-lg border-2' />
                        </Form.Item>
                    </Form.Item>
                    {qindex.map(index => {
                        return (
                            <Form.Item key={index} className='p-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                                <Form.Item
                                    className=' h-auto'>
                                    <div className=' w-full flex p-1' >
                                        <Input placeholder={'คำถามที่'} className='h-10 font-itim rounded-none border-none' />
                                    </div>

                                    {choices.map(ix => {
                                        return (
                                            <div
                                                className='flex font-itim w-full p-1'
                                            >
                                                <input name='question' type='text' className='border-none w-[80%] font-itim' placeholder={`กรอกตัวเลือกที่ `} />
                                                <input name='score' type='number' className='w-[20%]  font-itim rounded-none' placeholder='คะแนน' />
                                            </div>
                                        )
                                    })}



                                </Form.Item>
                            </Form.Item>
                        )
                    })}

                    <Form.Item className='p-4 bg-transparent shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>

                        <br />
                        <Button href='/Dashboard' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500 '>
                            บันทึก
                        </Button>
                    </Form.Item>
                </Form>
            </main>





        </>
    )
}