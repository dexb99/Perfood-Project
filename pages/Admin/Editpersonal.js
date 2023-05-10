import React, { useEffect } from 'react'
import { Button, Form, Input, InputNumber, message, Upload } from 'antd';
import Link from 'next/link';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Navbar from '../../Components/Navbar'
import axios from 'axios';
import PersonalByID from '../../Components/personalByID';
import Router from 'next/router';
import Image from 'next/image';
export default function EditPersonal() {
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [filePreview, setFilePreview] = useState([]);
    const [filePreview2, setFilePreview2] = useState([]);
    const personal = PersonalByID();
    const [newPername, setNewPername] = useState(null)
    const [newThreshold, setNewThreshold] = useState(null)
    const [newDetail, setNewDetail] = useState(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFilePreview(URL.createObjectURL(selectedFile));
        }
        else {
            console.log('pls upload image');
        }
    }
    const handleFileChange2 = (e) => {
        const selectedFile2 = e.target.files[0];
        if (selectedFile2) {
            setFile2(selectedFile2);
            setFilePreview2(URL.createObjectURL(selectedFile2));
        }
        else {
            console.log('pls upload image');
        }
    }
    const onSucess = () => {
        localStorage.clear()
        Router.push('/Admin/personal')
    }
    const handleUpload = () => {
        personal.map(personal => {
            const formData = new FormData();
            formData.append('Personal_IMG', file || personal.Personal_IMG)
            formData.append('Suggest_IMG', file2 || personal.Suggest_IMG)
            formData.append('Personal_ID', personal.Personal_ID)
            formData.append('Personal_Name', newPername || personal.Personal_Name)
            formData.append('Personal_Detail', newDetail || personal.Personal_Detail)
            formData.append('Threshold', newThreshold || personal.Threshold)
            axios.put('http://localhost:3001/updatepersonal', formData)
                .then(response => console.log(response))
                .catch(err => console.log(err));
            window.location.reload();
        }
        )
    };

    const { TextArea } = Input;
    return (
        <div>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                {personal.map((personal, index) => {
                    return (
                        <Form key={index} className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
                            <Form.Item className=' p-4 h-auto bg-transparent '>
                                <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                                    <div className='font-itim text-yellow-500 text-center bigger-font'>
                                        {personal.Personal_Name}
                                    </div>
                                </Form.Item>
                                <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                                    <div className='font-itim text-yellow-500'>
                                        เปลี่ยนชื่อบุคลักษณ์
                                    </div>
                                    <Input defaultValue={personal.Personal_Name} onChange={(event => {
                                        setNewPername(event.target.value)
                                    })}
                                        placeholder="" className='font-itim rounded-lg w-full border-2' />
                                </Form.Item>
                                <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                                    <div className='flex font-itim text-yellow-500'>
                                        <div className='w-1/2 '>
                                            เกณฑ์คะแนน(ค่ามากสุด)
                                        </div>
                                        <div className='w-1/2 text-end'>
                                            ค่าเดิม = {personal.Threshold}
                                        </div>
                                    </div>
                                    <InputNumber
                                        defaultValue={personal.Threshold}
                                        onChange={(value => {
                                            setNewThreshold(value)
                                        })} placeholder="" className='font-itim rounded-lg w-full border-2' />
                                </Form.Item>
                            </Form.Item>
                            <Form.Item className=''>
                                <div className='w-full flex'>
                                    <div className=' w-1/2 sm:w-full md:w-full'>
                                        <div className='font-itim text-center'>
                                            เลือกรูปบุคลักษณ์
                                        </div>
                                        <div>
                                            <input className='font-itim flex w-full' type='file' accept='.jpg,.jpeg,.png' onChange={handleFileChange} />
                                        </div>
                                        <div>
                                            {filePreview && <Image className='p-2 w-full h-auto' src={filePreview} />}
                                        </div>
                                    </div>
                                    <div className=' w-1/2 sm:w-full md:w-full'>
                                        <div className='font-itim text-center'>
                                            รูปแนะนำการท่องเที่ยว
                                        </div>
                                        <div>
                                            <input className='font-itim flex w-full' type='file' accept='.jpg,.jpeg,.png' onChange={handleFileChange2} />
                                        </div>
                                        <div>
                                            {filePreview2 && <Image className='p-2 w-full h-auto' src={filePreview2} />}
                                        </div>
                                    </div>

                                </div>
                            </Form.Item>
                            <Form.Item>
                                <div className='font-itim text-yellow-500'>
                                    ข้อมูลบุคลักษณ์
                                </div>
                                <TextArea onChange={(event => {
                                    setNewDetail(event.target.value)
                                })} defaultValue={`${personal.Personal_Detail}`} placeholder='ข้อมูลบุคลักษณ์' className='font-itim'></TextArea>
                            </Form.Item>
                            <Form.Item className=' p-4 bg-transparent'>
                                <div className='p-1'>
                                    <Button href='#' onClick={handleUpload} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
                                        เปลี่ยนแปลงข้อมูล
                                    </Button>
                                </div>
                                <div className='p-1'>
                                    <Button href='#' onClick={onSucess} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
                                        เสร็จสิ้น
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    )
                })}
            </main>

        </div>
    )
}
