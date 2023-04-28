import React, { useEffect } from 'react'
import { Button, Form, Input, InputNumber, message, Upload } from 'antd';
import Link from 'next/link';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import surveyList from './Components/surveyList';
import axios from 'axios';
import personalByID from './Components/personalByID';
export default function EditPersonal() {
    const [file, setFile] = useState([]);
    const [filePreview, setFilePreview] = useState([]);
    const personal = personalByID();
    const [newPername, setNewPername] = useState('')
    const [newThreshold, setNewThreshold] = useState(0)
    const [newDetail, setNewDetail] = useState('')

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
    const handleUpload = () => {
        personal.map(personal => {
            if (file.length === 0) {
                axios.post('http://localhost:3001/updateNoimg', {
                    Personal_ID: personal.Personal_ID,
                    Personal_Name: newPername,
                    Personal_Detail: newDetail,
                    Threshold: newThreshold
                }).then((response) => {
                    console.log(response)
                })
                window.location.reload();
            } else {
                const formData = new FormData();
                formData.append('image', file);
                formData.append('Personal_ID', personal.Personal_ID)
                formData.append('Personal_Name', newPername)
                formData.append('Personal_Detail', newDetail)
                formData.append('Threshold', newThreshold)
                axios.post('http://localhost:3001/updatewithimg', formData)
                    .then(response => console.log(response))
                    .catch(err => console.log(err));
                window.location.reload();
            }
        })
    };

    const { TextArea } = Input;
    return (
        <div>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                {personal.map(personal => {
                    return (
                        <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
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
                                <div className='border-black border-2'>
                                    <input className='font-itim flex  w-full' type='file' accept='.jpg,.jpeg,.png' onChange={handleFileChange} />
                                </div>
                                <div className='flex justify-center'>
                                    {filePreview && <img className=' w-1/2 h-auto' src={filePreview} />}
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
                                    <Button href='/Personal' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
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
