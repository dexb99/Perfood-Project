import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber, message, Upload } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../Components/Navbar'
import personalData from '../Components/personal_Data';
import axios from 'axios';
export default function CreateSuggest() {
    const perData = personalData();
    const [file, setFile] = useState([]);
    const [filePreview, setFilePreview] = useState([]);
    const [perName, setNewpername] = useState('')
    const [newThreshold, setNewThreshold] = useState(0)
    const [newDetail, setNewDetail] = useState('');
    const { TextArea } = Input;
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
    const addData = (event) => {
        const getID = JSON.parse(localStorage.getItem('PercreateID'));
        console.log(getID)
        getID.map((id) => {
            console.log(id.PercreateID)
            console.log(perName)
            console.log(newDetail)
            console.log(newThreshold)
            if (file.length === 0) {
                axios.post('http://localhost:3001/createNoimg', {
                    Personal_ID: id.PercreateID,
                    Personal_Name: perName,
                    Personal_Detail: newDetail,
                    Threshold: newThreshold
                }).then((response) => {
                    console.log(response)
                })
            } else {
                const formData = new FormData();
                formData.append('image', file);
                formData.append('Personal_ID', id.PercreateID)
                formData.append('Personal_Name', perName)
                formData.append('Personal_Detail', newDetail)
                formData.append('Threshold', newThreshold)
                axios.post('http://localhost:3001/createWithimg', formData)
                    .then(response => console.log(response))
                    .catch(err => console.log(err));
            }
        })
        localStorage.clear();
    }
    return (
        <div>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
                    <Form.Item className=' p-4 h-auto bg-transparent '>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <div className='font-itim text-yellow-500'>
                                ชื่อบุคลักษณ์
                            </div>
                            <Input onChange={(event => {
                                setNewpername(event.target.value)
                            })}
                                placeholder="" className='font-itim rounded-lg w-full border-2' />
                        </Form.Item>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <div className='flex font-itim text-yellow-500'>
                                <div className='w-1/2 '>
                                    เกณฑ์คะแนน(ค่ามากสุด)
                                </div>
                            </div>
                            <InputNumber
                                onChange={(value => {
                                    setNewThreshold(value)
                                })} placeholder="" className='font-itim rounded-lg w-full border-2' />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item className=''>
                        <div className='text-center font-itim'>
                            อัพโหลดรูปบุคลักษณ์
                        </div>
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
                        })} placeholder='ข้อมูลบุคลักษณ์' className='font-itim'></TextArea>
                    </Form.Item>
                    <Form.Item className=' p-4 bg-transparent'>
                        <div className='p-1'>
                            <Button href='/personal' onClick={addData} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
                                เพิ่มข้อมูล
                            </Button>
                        </div>
                    </Form.Item>
                </Form>

            </main>
        </div>
    )
}
