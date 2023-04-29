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


export default function readme() {
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
      {console.log(Personaldata)}
      <Layout className='h-auto px-5 sm:px-5 md:px-[10%] xl:px-[20%] overflow-auto'>
        <Header className=' bg-transparent' />
        <Content className='h-1/2 bg-yellow-100 border-2 flex justify-center items-center'>
          <Row className='w-[30.5] h-[43.5]'>
            {/* <Table1/> */}
        <Donut/>
        &nbsp;&nbsp;&nbsp;
        <Barchart/>
            
          </Row>   
        </Content>
        <Footer className='bg-yellow-100 flex justify-center items-center'>
        
        </Footer>
        
      </Layout>
    </>
  );
}