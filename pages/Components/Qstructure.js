import React from 'react'
import { Layout, Space, Col, Row, Radio } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

export default function Qstructure({ question }) {

    const { Header, Content, Footer } = Layout;
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <Layout className=' flex-row bg-green-400 rounded-lg border-solid border-2 border-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  '>
                <Content className='w-[30%] items-center flex justify-center'>
                    <div className=' text-center main-font w-[100%] p-1 '>
                        {question.question}
                    </div>
                </Content>
                <svg class="w-10 h-10 mr-5 -ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                </svg>
                <Content className='bg-transparent w-[80%] rounded-lg items-center justify-center block'>
                    <Row className='w-full h-full justify-center  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                        {question.choices.map((choice, index) => (
                            <div className='flex justify-start w-full pb-[1%]  shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)]'>
                                <Radio.Group key={index} value={selectedValue} onChange={handleChange} className=' w-full flex justify-center text-left p-1'>
                                    <Radio value={choice.weight} className=' text-left w-full h-full radio-font justify-start flex items-center overflow-auto'>
                                        {choice.text}
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