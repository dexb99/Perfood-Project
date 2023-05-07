import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserNavbar from '../Components/userNavbar';
import axios from 'axios';
import SurveyList from '../Components/surveyList';
import Router from 'next/router';
export default function Index() {

  const [browserName, setBrowserName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const SuveyList = SurveyList();
  const [sur, setSur] = useState(`SVY_01`);

  const fetchData = () => {
    axios.get('https://api.ipify.org?format=json').then((response) => {
      setIpAddress(response.data.ip);
    })
    axios.get('http://localhost:3001/browserName').then((response) => {
      console.log(response.data)
    })
  }

  // i just wannpen fan you daibor
  fetchData();
  const beginResponse = () => {
    const respone = localStorage.getItem('Response')
    if (respone) {

    } else {
      axios.post('http://localhost:3001/createresponse', {
        Survey_ID: sur
      }).then((response) => {
        let quiz = response.data;
        // Convert the updated quiz array to a string using JSON.stringify()
        const updatedQuizStr = JSON.stringify(quiz);
        // Store the updated quiz string back in the local storage under the key 'quiz'
        localStorage.setItem('Response', updatedQuizStr);
      }).catch((error) => {
        console.error('Failed to create response:', error);
      });
    }
  };
  const handdleClick = (surveyID) => {
    SuveyList.map((survey) => {
      if (survey.Survey_Status === "off") {
        Router.push('/surveyOff')
      } else {
        setSur(surveyID);
        beginResponse();
        Router.push('/User/Questionpage1')
      }
    })

  }

  const { Header, Content, Footer } = Layout;
  return (
    <>
      <div className=''>
        <UserNavbar />
      </div>
      <main className=" h-screen sm:px-5 md:px-[10%] xl:px-[20%]">
        {SuveyList.map((survey, index) => (
          <Layout key={index} className="h-full w-full bg-yellow-100 p-3">
            {/* <Header className='  bg-transparent h-[10%] justify-end items-center flex'>
                </Header> */}
            <div className='h-full '>
              <Content className='h-[80%] '>
                <Content className=' flex justify-center items-center h-full p-3'>
                  <div style={{ backgroundImage: "url('/line3.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "220% 400%" }}
                    className='sm:px-[10%] sm:py-[10%]   md:px-[10%] md:py-[10%]  xl:px-[15%] xl:py-[10%]  flex justify-center items-center bg-yellow-900 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-10 w-auto h-1/2 rounded-lg normalfoot-font  '>
                    <div className='  text-center h-auto w-full text-white p-2'>
                      {survey.Survey_Name}
                    </div>
                  </div>
                </Content>
              </Content>
              <Footer className='bg-transparent h-[20%] item-center px-10 flex'>
                <div className='w-full h-full flex p-3 rounded-lg justify-between'>
                  <div className='  rounded-lg justify-center w-[49%] px-3 flex items-center  foot-font'>
                    <Link onClick={beginResponse} className=' w-auto items-center flex justify-start' href='/User/readme'>
                      <button type="button" className="text-white border-none bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                        </svg>Read Me</button>
                    </Link>
                  </div>
                  <div className=' rounded-lg justify-center w-[49%] px-3 flex items-center  foot-font'>
                    <Link onClick={() => handdleClick(survey.Survey_ID)} className=' items-center w-auto main-icon flex justify-end' href='/User/Questionpage1'>
                      <button type="button" className="text-white bg-gradient-to-br border-none from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-base px-6 py-3.5 text-center mr-2 mb-2">
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>เริ่มกันเลย</button>
                    </Link>
                  </div>
                </div>
              </Footer>
            </div>
          </Layout>
        ))}
      </main>

    </>
  )
}