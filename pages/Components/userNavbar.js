import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd'
import Link from 'next/link';
import axios from 'axios';
import { redirect } from 'react-router-dom'
import { useRouter } from 'next/router'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserNavbar() {
    const navigation = [
        { name: 'หน้าแรก', href: '/', current: false, },
        { name: 'จัดการแบบสอบถาม', href: '#', current: false, onClick: () => setOpen(true) },
    ]
    // Set Loading time
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [pass, setPass] = useState('')
    const router = useRouter();
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    // Set Modal open
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //login function
    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/login', {
            username: userName,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus('เข้าสู่ระบบแล้ว กรุณารอสักครู่');
                router.push('/Admin/Dashboard')

            }
        })
    }
 
    return (
        <>
            <Disclosure as="nav" className="bg-yellow-900 fixed z-10 w-full overflow-hidden center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-white">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="block h-8 w-auto lg:hidden"
                                            src="/Ghost logo.png"
                                            alt="Your Company"
                                        />
                                        <img
                                            className="hidden h-8 w-auto lg:block"
                                            src="/Ghost logo.png"
                                            alt="Your Company"
                                        />
                                        <div className='block font-itim ml-6 lg:hidden'>
                                            PERFOOD CHIANGKAN
                                        </div>
                                        <div className='hidden font-itim ml-6 lg:block'>
                                            PERFOOD CHIANGKAN
                                        </div>
                                    </div>

                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Menu as="div" className="relative ml-6">
                                        <div className='flex items-center justify-between'>
                                            <div className=" hidden sm:ml-6 sm:block">
                                                <div className="border-solid flex space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current ? 'bg-yellow-100 text-black' : '',
                                                                'font-itim rounded-md px-3 py-2  font-medium'
                                                            )}
                                                            onClick={item.onClick}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-yellow-100 text-black' : ' text-gray-400 hover:bg-yellow-100 hover:text-black',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        onClick={item.onClick}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>





            <Modal
                title={<div className='font-itim'>เข้าสู่ระบบสำหรับผู้ดูแล</div>}
                footer={[
                    <button type="button" key="cancle" className='text-white bg-gradient-to-br from-yellow-400 to-orange-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-700 px-3 py-2 text-xs font-medium text-center rounded-lg mr-2 mb-2 inline-flex' onClick={onClose}>ยกเลิก</button>,

                    <button key="submit" className='text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 px-3 py-2 text-xs font-medium text-center rounded-lg mr-2 mb-2 inline-flex' loading={loading} onClick={login} >
                        เข้าสู่ระบบ
                    </button>
                    ,
                    <h1>{loginStatus}</h1>

                ]}
                onCancel={onClose} open={open}>

                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'กรุณาใส่ชื่อผู้ใช้',
                            },
                        ]}
                    >
                        <Input className='rounded-lg font-itim' onChange={(e) => { setUserName(e.target.value) }} placeholder="ชื่อผู้ใช้" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'กรุณากรอกรหัสผ่าน',
                            },
                        ]}
                    >
                        <Input.Password onChange={(e) => { setPassword(e.target.value) }} className=' border-solid border-black border-[1px]  h-[2.625rem] w-full rounded-lg font-itim '
                            placeholder="รหัสผ่าน"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}