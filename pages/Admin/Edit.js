import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber } from 'antd';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Navbar from '../Components/Navbar'
import axios from 'axios';
import questData from '../Components/questData';
import surveyList from '../Components/surveyList';
import Router from 'next/router';
export default function Edit() {
    const question = questData()
    const survey = surveyList()
    if (typeof window !== 'undefined') {
        window.onpopstate = function (event) {
            localStorage.clear();
        };
    }
    const onSuccess = () => {
        localStorage.clear();
        Router.push('/Admin/Dashboard')
    }
    const formRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = [];
        const formData = new FormData(formRef.current);
        for (let i = 0; i < question.length; i++) {
            const obj = {};
            obj.survey = formData.get(`surveyname`);
            obj.questionid = question[i].id;
            obj.question = formData.get(`Question ${i}`);
            obj.choices = [];
            for (let j = 0; j < question[i].choice.length; j++) {
                const choiceObj = {};
                choiceObj.choiceid = question[i].choice[j].choiceID
                choiceObj.choicetext = formData.get(`${question[i].choice[j].choiceID}_score`);
                choiceObj.score = formData.get(`${question[i].choice[j].score}_score`);
                obj.choices.push(choiceObj);
            }
            data.push(obj);
        }
        // console.log(data)
        // console.log(question)
        const getID = JSON.parse(localStorage.getItem('SUR_ID'));
        getID.map((id, index) => {
            axios.put('http://localhost:3001/updatesurvey', {
                surveyID: id.SUR_ID,
                survey: data[index].survey
            })
            data.map((data, index) => {
                axios.put('http://localhost:3001/updatequestion', {
                    questionid: data.questionid,
                    question: data.question
                }).then((response) => {
                    console.log(response.data)
                })
                data.choices.map((choice) => {
                    axios.put('http://localhost:3001/updatechoice', {
                        choiceID: choice.choiceid,
                        choicetext: choice.choicetext,
                        score: choice.score
                    })
                })

            })
        })
    };
    return (
        <>
            <Navbar />
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <form ref={formRef} onSubmit={handleSubmit} className='  sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
                    <div className='justify-center flex p-4 h-auto bg-transparent '>

                        <label className='w-full px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <div className='font-itim'>หัวข้อแบบสอบถาม</div>
                            {survey.map(survey => {
                                return (
                                    <Input required name='surveyname' defaultValue={survey.Survey_Name} placeholder="หัวข้อแบบสอบถาม" className='text-black bigger-font w-full bg-white font-itim rounded-lg ' />
                                )
                            })}
                        </label>
                    </div>
                    {question.map((question, i) => {
                        return (
                            <div key={i} className='py-5 font-itim px-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                                คำถามที่ {i + 1}
                                <div
                                    className=' h-auto'>
                                    <div className=' w-full flex p-1' >
                                        <Input
                                            required type='text' defaultValue={question.question} id={question} name={`Question ${i}`} placeholder={'คำถามที่' + question.id} className='text-black h-10 w-full  font-itim rounded-none border-none' />
                                    </div>
                                    <div className='flex p-1'>
                                        <div className='w-1/2 flex justify-start text-start'>
                                            คำตอบ
                                        </div>
                                        <div className='w-1/2 flex justify-end text-end'>
                                            คะแนน
                                        </div>
                                    </div>
                                    {question.choice.map((ix, index) => {
                                        return (
                                            <div
                                                className=' font-itim w-full p-1 '>
                                                <div>

                                                </div>
                                                <Input required defaultValue={ix.choiceText} name={`${ix.choiceID}_score`}
                                                    type='text' className='text-black  border-none w-[80%] font-itim' placeholder={`กรอกตัวเลือก${index + 1}`} />

                                                <Input required defaultValue={ix.score} name={`${ix.score}_score`}
                                                    type='number' className='w-[20%] text-black font-itim rounded-none' placeholder='คะแนน' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}

                    <Form.Item className='p-4 bg-transparent shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                        <div className='p-1'>
                            <Button href='#' onClick={handleSubmit} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
                                เปลี่ยนแปลงข้อมูล
                            </Button>
                        </div>
                        <div className='p-1'>
                            <Button href='#' onClick={onSuccess} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500  '>
                                เสร็จสิ้น
                            </Button>
                        </div>
                    </Form.Item>
                </form>
            </main>





        </>
    )
}