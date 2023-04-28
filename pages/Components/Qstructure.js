import React from 'react'
import { Layout, Space, Col, Row, Radio } from 'antd';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
export default function Qstructure({ question }) {
    console.log(question)
    const { Header, Content, Footer } = Layout;
    const [selectedValue, setSelectedValue] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedID, setSelectedID] = useState('');
    const [choices, setChoices] = useState([]);

    useEffect(() => {
        setChoices(shuffle(question.choice));
    }, []);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setSelectedID(event.target.name);
        const quizStr = localStorage.getItem('quiz');
        console.log(event.target.id);
        let quiz = [];
        // If the quiz string is not null or undefined, parse it into a JavaScript object
        if (quizStr) {
            quiz = JSON.parse(quizStr);
        }
        const newQuiz = {
            "question_ID": question.id,
            "choiceID": event.target.id,
            "question_score": event.target.value
        };
        let isQuestionFound = false;
        // Loop through the existing quiz array
        for (let i = 0; i < quiz.length; i++) {
            if (quiz[i].question_ID === newQuiz.question_ID) {
                // Update the question score if the question ID already exists
                quiz[i].question_score = newQuiz.question_score;
                quiz[i].choiceID = newQuiz.choiceID;
                isQuestionFound = true;
                break;
            }
        }

        if (!isQuestionFound) {
            // Add the new quiz object to the array if the question ID doesn't exist
            quiz.push(newQuiz);
        }
        // Convert the updated quiz array to a string using JSON.stringify()
        const updatedQuizStr = JSON.stringify(quiz);

        // Store the updated quiz string back in the local storage under the key 'quiz'
        localStorage.setItem('quiz', updatedQuizStr);
        setSelectedValue(event.target.value);
        setSelectedID(event.target.name);

    };


    return (
        <>
            {/* {console.log(question)} */}
            <Layout className=' flex-row bg-gradient-to-br from-yellow-700 to-yellow-500 rounded-lg border-solid border-2 border-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-white  '>
                <Content className='w-[30%] items-center flex justify-center'>
                    <div className=' text-center main-font w-[100%] p-1 '>
                        {question.question}
                    </div>
                </Content>
                <svg className="w-10 h-10 mr-5 -ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                </svg>
                <Content className='bg-transparent w-[80%] rounded-lg items-center justify-center block'>
                    <Row className='w-full h-full justify-center  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                        {question.choice.map((choice, index) => (
                            <div key={index} className='flex justify-start w-full pb-[1%]  shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)]'>
                                <Radio.Group key={index} value={selectedValue} onChange={handleChange} className=' w-full flex justify-center text-left p-1'>
                                    <Radio required id={choice.choiceID} value={choice.score} className=' text-left w-full h-full radio-font justify-start flex items-center overflow-auto'>
                                        {choice.choiceText}
                                    </Radio>
                                </Radio.Group>
                            </div>
                        ))}
                    </Row>
                </Content>
            </Layout>
        </>
    )
}