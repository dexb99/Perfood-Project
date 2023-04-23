import React from 'react'
import { Layout, Space, Col, Row, Button } from 'antd';
import Qstructure from './Qstructure';
import questionData from './questionData';
export default function Questinos(props) {
    const { questions } = props;
    const { Content,} = Layout;
    return (
        <main className='h-auto max-h-auto pt-16  sm:px-0 md:px-[10%] xl:px-[20%]'>
            <Content className=' bg-yellow-100  h-auto flex-row w-full border-solid  '>
                {questions.map((question, index) => (
                    <div key={index} className='p-4 sm:px-9 md:px-[1.875rem] xl:px-[4.125rem] border-black border-2'>
                        <Qstructure question={question} />
                    </div>
                ))}
            </Content>
        </main>
    )
}