import React from 'react'
import { Layout, Button, Drawer, Modal, Form, Input, Select, InputNumber } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Components/Navbar'
export default function Create() {
    const { Option } = Select;
    const [question, setQuestion] = useState([]);
    const [choice, setChoice] = useState([]);
    const [survey, setSurvey] = useState('');
    const [score, setScore] = useState(0);
    const [choiceID, setChoiceID] = useState('');
    const [questID, setQuestID] = useState('');
    const qindex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const choices = ['A', 'B', 'C', 'D'];
    let pattern = [];
    // for (let i = 0; i < qindex.length; i++) {
    //     for (let j = 0; j < choices.length; j++) {
    //         pattern = [`${qindex[i]}${choices[j]}`];

    //     }
    // }

    const handleClick = (event) => {
        const questStr = localStorage.getItem('question');
        let quest = [];

        // If the quiz string is not null or undefined, parse it into a JavaScript object
        if (questStr) {
            quest = JSON.parse(questStr);
        }

        const newQuest = {
            "Suurvey_Name": survey,
            "Qusetion": [],
            "choice": []
        };

        // Loop through the qindex array and generate data for each question and choice
        for (let i = 0; i < qindex.length; i++) {
            const questionID = `${qindex[i]}`;
            const questionName = question[i];
            const questionData = {
                "questionID": questionID,
                "questionName": questionName
            };
            newQuest.Qusetion.push(questionData);

            for (let j = 0; j < choices.length; j++) {
                const choiceID = `CH${qindex[i]}_${choices[j]}`;
                const choiceName = choice[i * choices.length + j];
                const scoreValue = score[i * choices.length + j];
                const choiceData = {
                    "choiceID": choiceID,
                    "choiceName": choiceName,
                    "Score": scoreValue
                };
                newQuest.choice.push(choiceData);
            }
        }
        quest.push(newQuest);


        // Convert the updated quiz array to a string using JSON.stringify()
        const updatedquestStr = JSON.stringify(quest);

        // Store the updated quiz string back in the local storage under the key 'quiz'
        localStorage.setItem('question', updatedquestStr);
    };
    return (
        <>
            <Navbar />
            {console.log(choiceID)}
            <main className=' h-auto  pt-16 sm:px-5 md:px-[10%] xl:px-[20%]'>
                <Form className=' sm:px-3 md:px-[2.5%] xl:px-[5%] h-auto bg-yellow-100'>
                    <Form.Item className=' p-4 h-auto bg-transparent '>
                        <Form.Item className=' px-[1.625rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  p-1 h-auto'>
                            <Input onChange={((event) => {
                                setSurvey(event.target.value);
                            })} name='surveyname' placeholder="หัวข้อแบบสอบถาม" className='font-itim rounded-lg border-2' />
                        </Form.Item>
                    </Form.Item>
                    {qindex.map((question, i) => {
                        return (
                            <Form.Item key={i} className='p-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                                <Form.Item
                                    className=' h-auto'>
                                    <div className=' w-full flex p-1' >
                                        <input type='hidden' name='choiceID'
                                            onChange={((event) => {
                                                setQuestID(event.target.value);
                                            })}
                                            value={question} />
                                        <Input onChange={((event) => {
                                            setQuestion(event.target.value);
                                        })}
                                            name='Qname' placeholder={'คำถามที่' + question} className='h-10 font-itim rounded-none border-none' />
                                    </div>

                                    {choices.map((ix, index) => {
                                        return (
                                            <div
                                                className='flex font-itim w-full p-1'
                                            >
                                                <input type='hidden' onChange={((event) => {
                                                    setChoiceID(event.target.value);
                                                })} value={ix} />

                                                <input name='choice' onChange={((event) => {
                                                    setChoice(event.target.value);
                                                })}
                                                    type='text' className='border-none w-[80%] font-itim' placeholder={`กรอกตัวเลือก`} />
                                                <input name='score'
                                                    onChange={((event) => {
                                                        setScore(event.target.value);
                                                    })}
                                                    type='number' className='w-[20%]  font-itim rounded-none' placeholder='คะแนน' />
                                            </div>
                                        )
                                    })}



                                </Form.Item>
                            </Form.Item>
                        )
                    })}

                    <Form.Item className='p-4 bg-transparent shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>

                        <br />
                        <Button href='#' onClick={handleClick} className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500 '>
                            บันทึก
                        </Button>
                    </Form.Item>
                </Form>
            </main>





        </>
    )
}