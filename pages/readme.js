import React from 'react';
import { Col, Row, Image, Button, Layout, Drawer } from 'antd';
import PersonalData from './Components/PersonalData';
import UserNavbar from './Components/userNavbar';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Link from 'next/link';


export default function readme() {
  const { Header, Content, Footer } = Layout;

  const [selectedPersonal, setSelectedPersonal] = useState(null);
  const showDrawer = (personal) => {
    setSelectedPersonal(personal);
  };

  const onClose = () => {
    setSelectedPersonal(null);
  };

  return (
    <>
      <UserNavbar />
      <Layout className='h-auto px-5 sm:px-5 md:px-[10%] xl:px-[20%] overflow-auto'>
        <Header className=' bg-transparent' />
        <Content className='h-1/2 bg-white border-2 flex justify-center items-center'>
          <Row className='w-[30.5] h-[43.5]'>
            {PersonalData.map((personal) => (
              <Col key={personal.id} className='p-2 bg-honeydew-300 h-1/4 max-sm:w-1/2 md:w-1/4 xl:w-1/4 justify-center items-center'>
                <div className='justify-center items-center border-dashed bg-yellow-300 rounded-lg p-2 h-full sm:p-0 md:p-[4%] xl:p-[8%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                  <div className='justify-center items-center  flex h-full'>
                    <img className='w-[100%] h-{100%]' src={personal.Image} />
                  </div>
                  <div className='justify-center items-center flex h-full'>
                    <button type='button' class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 to-orange-600 group-hover:from-yellow-400 group-hover:to-orange-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800"  onClick={() => showDrawer(personal)}>
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{personal.Personaltype}</span></button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {selectedPersonal && (
            <Drawer
              title={selectedPersonal.Personaltype}
              placement='bottom'
              onClose={onClose}
              visible={!!selectedPersonal}
              className='font-itim main-font'
            >
              <p>{selectedPersonal.info}</p>
            </Drawer>
          )}
        </Content>
        <Footer className='bg-honeydew-300 flex justify-center items-center'>
          <div className='w-1/4 main-font flex justify-center items-center'>
          <Link className=' items-center w-auto main-icon flex justify-center ' href="/">
              <button type="button" class="text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">Les't Go</button>
              
              </Link>
          </div>
        </Footer>
      </Layout>
    </>
  );
}