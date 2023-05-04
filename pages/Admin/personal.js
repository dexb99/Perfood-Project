import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import Navbar from '../Components/Navbar'
import personalData from '../Components/personal_Data';
import axios from 'axios';
import Router from 'next/router';
export default function Personal() {
    const person = personalData();
    const handleEdit = (event) => {
        const PersonalID = [{
            "PER_ID": event.target.id
        }];
        const setLocalPerID = JSON.stringify(PersonalID)
        localStorage.setItem('PER_ID', setLocalPerID)
        Router.push('/Admin/Editpersonal')
    }

    const handleDelete = (event) => {
        const id = event.target.id
        Modal.confirm({
            className: "font-itim",
            title: "คุณแน่ใจหรอว่าจะลบข้อมูล",
            onOk: () => {
                axios.delete(`http://localhost:3001/deletePERSONAL/${id}`).then((response) => {
                    console.log('Personal Deleted')
                })
                window.location.reload();
            },
            onCancel: () => { },
            okButtonProps: {
                className: "text-black shadow-sm bg-red-100"
            }
        });
    }
    const addPerID = () => {
        if (person.length === 0) {
            const idForCeate = [{
                "PercreateID": "PER_1"
            }]
            const setIDcrt = JSON.stringify(idForCeate)
            localStorage.setItem('PercreateID', setIDcrt)
        } else {
            const lastINDEX = person.length - 1;
            const getlasOBj = person[lastINDEX];
            let personalID = getlasOBj.Personal_ID;
            console.log(personalID);
            const splitID = personalID.split('_')
            const addID = parseInt(splitID[1]) + 1
            personalID = splitID[0].concat('_', addID)
            console.log(personalID)
            const idForeCreate = [{
                "PercreateID": personalID
            }]
            const setIDcrt = JSON.stringify(idForeCreate)
            localStorage.setItem('PercreateID', setIDcrt)
        }
        Router.push('/Admin/Createpersonal')
    }
    const { Header, Content, Footer } = Layout;

    return (
        <>
            <Navbar />
            <main className="  h-screen pt-16 sm:px-5 md:px-[10%] xl:px-[20%]">
                <Layout className=" sm:px-3 md:px-[2.5%] xl:px-[5%] h-full w-full bg-yellow-100 ">
                    <Header className='   sm:p-1 md:p-[2%] xl:p-[4%] bg-transparent  h-[10%]'>
                        <div className='p-3'>
                            <Button href='#' onClick={addPerID} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500 '>
                                เพิ่มบุคลักษณ์
                            </Button>
                        </div>
                    </Header>
                    <Content className=' h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                        <div className=''>
                            <div className='text-center font-itim main-font font-bold max-sm:text-base bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>รายการบุคลักษณ์</div>
                            {person.map((personal, index) => (
                                <div key={index} className='p-3 '>
                                    <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                        <div className=' w-1/2 text-start font-itim text-yellow-500'>
                                            {personal.Personal_Name}
                                        </div>
                                        <div className=' w-1/2 flex items-center justify-end text-center '>
                                            <div className='flex bg-gray-400 rounded-lg p-1 font-itim'>
                                                <div>
                                                    <Link className='px-5 hover:text-white' id={personal.Personal_ID} onClick={handleEdit} href="#">แก้ไข</Link>
                                                </div>
                                                <div>
                                                    <Link className='px-5 hover:text-white ' id={personal.Personal_ID} onClick={handleDelete} href="#">ลบ</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </Content>
                </Layout>
            </main>
        </>
    )
}