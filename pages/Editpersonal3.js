import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber, message, Upload } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import surveyList from './Components/surveyList';
export default function EditPersonal() {

    const { TextArea } = Input;
    return (
        <>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
                    <Form.Item className=' p-4 h-auto bg-transparent '>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                        <div className='font-itim text-yellow-500 text-center bigger-font'>
                        Activist
                        </div>
                            
                        </Form.Item>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                        <div className='font-itim text-yellow-500'>
                        เปลี่ยนชื่อบุคลักษณ์
                        </div>
                            <InputNumber placeholder="" className='font-itim rounded-lg w-full border-2' />
                        </Form.Item>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                        <div className='font-itim text-yellow-500'>
                        เกณฑ์คะแนน(ค่ามากสุด)
                        </div>
                            <InputNumber placeholder="" className='font-itim rounded-lg w-full border-2' />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <div className='flex justify-center '>
                            <div
                                className='p-2 border-solid bg-yellow-200 h-[35%] max-sm:w-[35%] md:w-[35%] xl:w-[35%] justify-center items-center'>
                                <div className='justify-center items-center border-dashed bg-yellow-50 rounded-lg p-2 h-full sm:p-0 md:p-[4%] xl:p-[8%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                                    <div className=' justify-center items-center  flex h-full'>
                                        
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className='font-itim text-yellow-500'>
                            ข้อมูลบุคลักษณ์
                        </div>
                        <TextArea placeholder='ข้อมูลบุคลักษณ์' className='font-itim'>
                        </TextArea>
                    </Form.Item>
                    <Form.Item className='p-4 bg-transparent'>
                        <Button href='/personal' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
                            การเปลี่ยนแปลง
                        </Button>
                    </Form.Item>
                </Form>
            </main>

        </>
    )
}
