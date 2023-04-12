import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import surveyList from './Components/surveyList';
export default function Edit() {
    const { Header, Content, Footer } = Layout;
    const [open, setOpen] = useState(false);
    const modalOpen = () => {
        setOpen(true);
    }
    const modalClose = () => {
        setOpen(false);
    }
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const { Option } = Select;
    return (
        <>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-honeydew-200'>
                    <Form.Item className=' p-4 h-auto bg-transparent '>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <Input placeholder="หัวข้อแบบสอบถาม" className='font-itim rounded-lg border-2' />
                        </Form.Item>
                    </Form.Item>

                    <Form.Item className='p-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                        <Form.Item className=' h-auto'>
                            <div className=' w-full flex p-1' >
                                <Input placeholder='หัวข้อคำถาม' className='h-10 font-itim rounded-none border-none' />
                                <div className=' items-center bg-white h-10 rounded-none p-1 flex font-itim'>
                                    <Link className=' px-5 hover:text-white ' href="#">ลบ</Link>
                                </div>
                            </div>
                            <div>
                                <Select placeholder="ประเภทคำถาม" className='font-irim p-1'>
                                    <Option value="เลือกตัวเลือกเดียว">เลือกตัวเลือกเดียว</Option>
                                </Select>
                                <Button onClick={modalOpen} className=' font-itim  w-full bg-white '>จัดการคำตอบ</Button>
                            </div>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item className='p-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                        <Form.Item className=' h-auto'>
                            <div className=' w-full flex p-1' >
                                <Input placeholder='หัวข้อคำถาม' className='h-10 font-itim rounded-none border-none' />
                                <div className=' items-center bg-white h-10 rounded-none p-1 flex font-itim'>
                                    <Link className=' px-5 hover:text-white ' href="#">ลบ</Link>
                                </div>
                            </div>
                            <div>
                                <Select placeholder="ประเภทคำถาม" className='font-irim p-1'>
                                    <Option value="เลือกตัวเลือกเดียว">เลือกตัวเลือกเดียว</Option>
                                </Select>
                                <Button onClick={modalOpen} className=' font-itim  w-full bg-white '>จัดการคำตอบ</Button>
                            </div>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item className='p-4 bg-transparent'>
                        <Button className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full  '>
                            เพิ่มแบบสอบถาม
                        </Button>
                        <Button  href='/Dashboard' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full  '>
                            บันทึกความเปลี่ยนแปลง
                        </Button>
                    </Form.Item>
                </Form>
            </main>

            {/* modal */}

            <Modal
                title={<div className='font-itim'>จัดการคำตอบ</div>}
                footer={[
                    <Button key="cancle" className='font-itim' onClick={modalClose}>ยกเลิก</Button>,
                    <Button key="submit" className='font-itim' onClick={modalClose}>บันทึก</Button>
                ]}
                onCancel={modalClose} open={open}>

                <Form
                    name="dynamic_form_item"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}

                >
                    <Form.List
                        name="names"
                    >
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        required={false}
                                        key={field.key}
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: "Please input passenger's name or delete this field.",
                                                },
                                            ]}
                                            noStyle
                                            className='font-itim'
                                        >
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <Input
                                                        placeholder="ชื่อคำตอบ"
                                                        className=' border-1 h-10 font-itim'
                                                    />
                                                </div>
                                                <div className='w-[20%]'>
                                                    <InputNumber placeholder='คะแนน' className='border-black h-10 font-itim rounded-none' />
                                                </div>
                                                <div>
                                                    {fields.length > 1 ? (

                                                        <Button className=""
                                                            onClick={() => remove(field.name)}>
                                                            ลบ
                                                        </Button>

                                                    ) : null}
                                                </div>
                                            </div>

                                        </Form.Item>

                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{
                                            width: '60%',
                                        }}
                                    >
                                        เพิ่มคำตอบ
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Form>
            </Modal>

        </>
    )
}
