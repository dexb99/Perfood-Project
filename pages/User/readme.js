import React from 'react';
import { Col, Row, Image, Button, Layout, Drawer } from 'antd';
import PersonalData from '../../Components/personal_Data';
import UserNavbar from '../../Components/userNavbar';
import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Link from 'next/link';


export default function Readme() {
  const { Header, Content, Footer } = Layout;
  const Personaldata = PersonalData();
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
      {console.log(Personaldata)}
      <Layout className='h-auto px-5 sm:px-5 md:px-[10%] xl:px-[20%] overflow-auto'>
        <Header className=' bg-transparent' />
        <Content className='h-1/2 bg-yellow-100 flex justify-center items-center'>
          <Row className='w-[30.5] h-[43.5]'>
            {Personaldata.map((personal) => (
              <Col key={personal.Personal_ID} className='p-2 bg-yellow-100 h-1/4 max-sm:w-1/2 md:w-1/4 xl:w-1/4 justify-center items-center'>
                <div className='justify-center items-center  bg-yellow-300 rounded-lg p-2 h-full sm:p-0 md:p-[4%] xl:p-[8%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                  <div className='justify-center text-center text-white minifoot-font shadow-md rounded-lg group bg-gradient-to-br from-yellow-700 to-yellow-500'>
                    {personal.Personal_Name}
                  </div>
                  <div className='justify-center items-center  flex h-full'>

                    <img className='w-[100%] h-{100%]' src={`http://localhost:3001/images/${personal.Personal_IMG}`} />
                  </div>
                  <div className='justify-center items-center flex h-full'>
                    <div type="block" className='relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-700 to-yellow-500 '>
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-yellow-100 dark:bg-gray-900 rounded-md ">
                        {personal.Personal_Detail}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

        </Content>
        <Footer className='bg-yellow-100 flex justify-center items-center'>
          <div className='w-1/4 main-font flex justify-center items-center'>
            <Link className=' items-center w-auto main-icon flex justify-center ' href="/">
              <button type="button" className="border-none text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                Let&apos;s Go
              </button>
            </Link>
          </div>
        </Footer>
      </Layout>
      {selectedPersonal && (
        <Drawer
          title={selectedPersonal.Personal_Name}
          placement='bottom'
          onClose={onClose}
          open={!!selectedPersonal}
          className='font-itim main-font'
        >
          <p className='text-black'>{selectedPersonal.Personal_Detail}</p>
        </Drawer>
      )}
    </>
  );
}