import React from 'react'
import { Layout, Space, Col, Row, Button } from 'antd';
import { useState, useEffect } from 'react';
import Qstructure from './Qstructure';
export default function Questions(props) {
    const { questions } = props;
    const { Content, } = Layout;
    const [score, setScore] = useState([]);
    function handleAnswerSeleted(score) {
        setScore(score);
    }
    return (
        <main className='h-auto max-h-auto pt-16  sm:px-0 md:px-[10%] xl:px-[20%]'>
            <Content className=' bg-yellow-50  h-auto flex-row w-full border-solid  '>
                {questions.map((question, index) => (
                    <div key={index} className='p-4 sm:px-9 md:px-[1.875rem] xl:px-[4.125rem] border-black border-2'>
                        <Qstructure question={question} onAnwserSelected={handleAnswerSeleted} />                    </div>
                ))}
            </Content>
        </main>
    )
}