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
        <Layout className="h-full w-full bg-green-100">
          <Header className=' bg-transparent h-[10%] justify-end items-center flex'>
          </Header>
          <Content className='h-[70%] '>
            <Content className='flex justify-center items-center h-full '>
              <div className='text-center font-itim bigger-font '>
              <div className='sm:px-0 md:px-[5%] xl:px-[10%] flex justify-center items-center bg-green-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-10 w-auto h-1/2 border-dashed rounded-lg  font-itim bigger-font '>
                Welcome to Perfood เชียงคาน
                </div>
              </div>
            </Content>
          </Content>
          <Footer className='bg-transparent h-[20%] item-center px-10 flex'>
            <div className='justify-center w-full flex  items-center  foot-font'>
            <div className=' border-dashed rounded-lg justify-center w-[49%] px-3 flex items-center  foot-font'>
              <Link className=' items-center w-auto main-icon flex justify-center ' href="/Playgame">
              <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2 inline-flex">
              <svg class="w-10 h-10 mr-5 -ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
              </svg>
              ลองเล่นเกมของเราสิ
              </button>
              
              </Link>
              </div>
            </div>
          </Footer>
        </Layout>
      </main>

      {/* Modal setting */}

    </>
  )
}
