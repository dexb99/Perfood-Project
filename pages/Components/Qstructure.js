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
        <Layout className=' flex-row bg-white rounded-lg border-dashed border-2 border-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  '>
            <Content className='w-[30%] items-center flex justify-center'>
                <div className=' text-center main-font w-[100%]  '>
                    {question.question}
                </div>
            </Content>
            <Content className='bg-transparent w-[80%] rounded-lg items-center justify-center block'>
                <Row className='w-full h-full justify-center  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                    {question.choices.map((choice, index) => (
                        <div className='flex justify-start w-full pb-[1%]  shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)]'>
                            <Radio.Group key={index} value={selectedValue} onChange={handleChange} className=' w-full flex justify-center text-left'>
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
