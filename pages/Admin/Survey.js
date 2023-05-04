import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import Navbar from '../Components/Navbar'
import surveyList from '../Components/surveyList';
export default function Survey() {
    const survey = surveyList();
    const handleEdit = (event) => {
        const PersonalID = [{
            "SUR_ID": event.target.id
        }];
        const setLocalPerID = JSON.stringify(PersonalID)
        localStorage.setItem('SUR_ID', setLocalPerID)
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
    const addPerID = () => {
        if (survey.length === 0) {
            const idForCeate = [{
                "surcreateID": "PER_1"
            }]
            const setIDcrt = JSON.stringify(idForCeate)
            localStorage.setItem('surcreateID', setIDcrt)
        } else {
            const lastINDEX = survey.length - 1;
            const getlasOBj = survey[lastINDEX];
            let suveyID = getlasOBj.Survey_ID;
            const splitID = suveyID.split('_')
            const addID = parseInt(splitID[1]) + 1
            suveyID = splitID[0].concat('_0', addID)
            const idForeCreate = [{
                "surcreateID": suveyID
            }]
            const setIDcrt = JSON.stringify(idForeCreate)
            localStorage.setItem('surcreateID', setIDcrt)
        }
    }
    return (
        <>
            {console.log(survey)}
            <main className=" h-screen pt-16 sm:px-5 md:px-[10%] xl:px-[20%]">
                <Layout className=" sm:px-3 md:px-[2.5%] xl:px-[5%] h-full w-full bg-yellow-100 ">

                    <Content className='border-solid  h-[80%] sm:p-1 md:p-[2%] xl:p-[4%] '>
                        <div className='border-solid border-2 '>

                            <div className='text-center font-itim main-font font-bold max-sm:text-base bg-yellow-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>รายการแบบสอบถาม</div>
                            {survey.map((survey, index) => (
                                <div key={index} className='p-3 border-solid '>
                                    <div className='m-1 bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex px-6 py-3  rounded-lg'>
                                        <div className=' w-1/2 text-start font-itim text-yellow-500'>
                                            {survey.Survey_Name}
                                        </div>
                                        <div className=' w-1/2 flex items-center justify-end text-center '>
                                            <div className=' bg-gray-400 rounded-lg p-1 font-itim'>
                                                <Link className='px-5 hover:text-white' id={survey.Survey_ID} onClick={handleEdit} href="/pages/Admin/Edit.js">แก้ไข</Link>
                                                <Link className='px-5 hover:text-white ' id={survey.Survey_ID} onClick={handleDelete} href="#">ลบ</Link>
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