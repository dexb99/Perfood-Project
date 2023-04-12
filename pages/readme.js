import React from 'react';
import { Col, Row, Image, Button, Layout, Drawer } from 'antd';
import PersonalData from './Components/PersonalData';
import UserNavbar from './Components/userNavbar';
import { useState } from 'react';
import Navbar from './Components/Navbar';


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
                <div className='justify-center items-center border-dashed bg-honeydew-100 rounded-lg p-2 h-full sm:p-0 md:p-[4%] xl:p-[8%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                  <div className='justify-center items-center  flex h-full'>
                    <img className='w-[100%] h-{100%]' src={personal.Image} />
                  </div>
                  <div className='justify-center items-center flex h-full'>
                    <Button className='justify-center main-font h-auto flex items-center w-auto' onClick={() => showDrawer(personal)}>{personal.Personaltype}</Button>
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
            <Button href='/Homepage' className='bg-honeydew-100 w-full h-auto main-font'>
              Let's go
            </Button>
          </div>
        </Footer>
      </Layout>
    </>
  );
}
