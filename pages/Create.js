import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber } from 'antd';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Navbar from './Components/Navbar'
import axios from 'axios';
import questData from './Components/questData';
export default function Create() {
    const { Option } = Select;

    const qindex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const choices = ['A', 'B', 'C', 'D'];
    const formRef = useRef(null);
    const handleSubmit = (event) => {

        event.preventDefault()
        const data = [];
        const formData = new FormData(formRef.current);
        for (let i = 0; i < qindex.length; i++) {
            const obj = {};
            obj.survey = formData.get(`surveyname`);
            obj.questionid = qindex[i];
            obj.question = formData.get(`Question ${qindex[i]}`);
            obj.choices = [];
            for (let j = 0; j < choices.length; j++) {
                const choiceObj = {};
                choiceObj.choiceid = formData.get(`CH${qindex[i]}_${choices[j]}`);
                choiceObj.choicetext = formData.get(`CH${qindex[i]}_${choices[j]}_text`);
                choiceObj.score = formData.get(`CH${qindex[i]}_${choices[j]}_score`);
                obj.choices.push(choiceObj);
            }
            data.push(obj);
        }
        const getID = JSON.parse(localStorage.getItem('surcreateID'));
        getID.map((id) => {
            axios.post('http://localhost:3001/createsurvey', {
                surveyID: id.surcreateID,
                survey: data[0].survey,
            })
            data.map((data,) => {
                axios.post('http://localhost:3001/createquestion', {
                    surveyID: id.surcreateID,
                    question: data.question
                }).then((response) => {
                    console.log(response.data)
                })
                data.choices.map((choice) => {
                    axios.post('http://localhost:3001/createchoice', {
                        questionid: data.questionid,
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
                            <Input required name='surveyname' placeholder="หัวข้อแบบสอบถาม" className='text-black bigger-font w-full bg-white font-itim rounded-lg ' />
                        </label>
                    </div>
                    {qindex.map((question, i) => {
                        return (
                            <div key={i} className='py-5 px-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                                <div
                                    className=' h-auto'>
                                    <div className=' w-full flex p-1' >
                                        <input type='hidden' name={question} />
                                        <Input
                                            required type='text' id={question} name={`Question ${question}`} placeholder={'คำถามที่' + question} className='text-black h-10 w-full  font-itim rounded-none border-none' />
                                    </div>
                                    {choices.map((ix, index) => {
                                        return (
                                            <div
                                                className='flex font-itim w-full p-1'
                                            >
                                                <input type='hidden' defaultValue={`CH${question}_${ix}`} name={`CH${question}_${ix}`} />
                                                <Input required name={`CH${question}_${ix}_text`}
                                                    type='text' className='text-black border-none w-[80%] font-itim' placeholder={`กรอกตัวเลือก${ix}`} />
                                                <Input required name={`CH${question}_${ix}_score`}
                                                    type='number' className='w-[20%] text-black font-itim rounded-none' placeholder='คะแนน' />
                                            </div>
                                        )
                                    })}



                                </div>
                            </div>
                        )
                    })}

                    <Form.Item className='p-4 bg-transparent shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                        <Button htmlType='submit' className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500 '>
                            บันทึก
                        </Button>
                    </Form.Item>
                </form>
            </main>





        </>
    )
}