import { useEffect, useState } from "react"
import { Row, Col } from "antd";
import axios from "axios";
function NumBer() {
    const [NumberProps, setNumberProps] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/getVieworDo').then((response) => {
            setNumberProps(response.data)
        })
        console.log(NumberProps)
    }, [])

    return (
        <div className='  w-full h-full '>
            {/* Doughnut chart */}
            {/* <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1> */}
            <Row className='  w-full h-1/4 shadow-lg'>
                <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 radio-font text-center  text-yellow-800'>
                    จำนวนผู้ตอบแบบสอบถาม
                </Col>
                <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 radio-font text-center  text-yellow-800'>
                    ผู้เข้าชมเว็บ
                </Col>
            </Row>
            <Row className="w-full h-3/4 shadow-lg">
                {NumberProps.map((number) => {
                    return (
                        <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 foot-font text-center  text-yellow-800'>
                            {number.number}
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default NumBer;