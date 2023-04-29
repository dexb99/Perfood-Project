import React from 'react';
import { Col, Row, Image, Button, Layout, Drawer } from 'antd';
import { Chart } from "chart.js";
import personalData from './Components/personal_Data';
import UserNavbar from './Components/userNavbar';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Link from 'next/link';
import Table1 from './Components/Table';
import Donut from './Components/Donutchart';
import Barchart from './Components/Barchart';
import surveyList from './Components/surveyList';


export default function readme() {
  
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
  const Personaldata = personalData();
  const [selectedPersonal, setSelectedPersonal] = useState(null);
  const showDrawer = (personal) => {
    setSelectedPersonal(personal);
  };

  const onClose = () => {
    setSelectedPersonal(null);
  };

  return (
    <>
      <Navbar />

      <Layout className='h-[80%] px-5 sm:px-5 md:px-[10%] xl:px-[20%] overflow-auto'>
        <Header className=' bg-transparent' />
        <Content className='w-full h-full bg-yellow-100 flex justify-center items-center'>
        <div className='w-full h-auto flex'>
            {/* <Table1/> */}
          <div className='w-1/2 flex justify-center'>
        <Donut />
        </div >
        <div className='w-1/2 flex justify-center'>
        <Barchart /> 
        </div>
        
        </div>   
        </Content>
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
                                                <Link className='px-5 hover:text-white' id={survey.Survey_ID} onClick={handleEdit} href="/Edit">แก้ไข</Link>
                                                <Link className='px-5 hover:text-white ' id={survey.Survey_ID} onClick={handleDelete} href="#">ลบ</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </Content>
        <Footer className='bg-yellow-100 flex justify-center items-center w-full p-0'>
        
        </Footer>
        
      </Layout>
    </>
  );
}