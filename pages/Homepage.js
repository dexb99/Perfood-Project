import React from 'react'
import { PlayCircleFilled, FileOutlined } from '@ant-design/icons'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import UserNavbar from './Components/userNavbar';

export default function Homepage() {
  const { Header, Content, Footer } = Layout;
  // display
  return (
    <>
    <UserNavbar/>
      <main className=" bg-cover h-screen sm:px-5 md:px-[10%] xl:px-[20%]">
        <Layout className="h-full w-full bg-honeydew-100 ">
          <Header className=' bg-transparent h-[10%] justify-end items-center flex'>
          </Header>
          <Content className='h-[70%] '>
            <Content className='flex justify-center items-center h-full '>
              <div className='text-center font-itim bigger-font '>
                Welcome to Perfood เชียงคาน
              </div>
            </Content>
          </Content>
          <Footer className='bg-transparent h-[20%] item-center px-10 flex'>
            <div className='justify-center w-full flex  items-center border-solid border-black border-2 foot-font'>
              <Link className=' items-center w-auto main-icon flex justify-center ' href="/Playgame">
                <div>
                  ลองเล่นเกมของเราสิ!!!
                </div>
                <img className='responsive-icon justify-center items-center' src='/Play.svg' />
              </Link>
            </div>
          </Footer>
        </Layout>
      </main>

      {/* Modal setting */}

    </>
  )
}
