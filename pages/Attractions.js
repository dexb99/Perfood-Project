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
      {/* <UserNavbar /> */}
      <main className=" bg-cover h-screen sm:px-5 md:px-[10%] xl:px-[20%]">
        <Layout className="h-full w-full bg-yellow-100">
          <Header className=' bg-transparent h-[10%] justify-end items-center flex'>
          </Header>
          <Content className='h-[70%] '>
            <Content className='flex justify-center items-center h-full '>
              <div className='text-center font-itim bigger-font '>
                <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center w-auto h-1/2 border-dashed rounded-lg  font-itim bigger-font '>

                  <img class=" w-auto h-auto mr-5 -ml-1 fixed  " src='/attraction2.jpg' alt="image description"/>
                </div>
              </div>
            </Content>
          </Content>
          
        </Layout>
      </main>

    </>
  )
}