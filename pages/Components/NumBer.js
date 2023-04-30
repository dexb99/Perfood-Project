import { useEffect } from "react"
import { Chart } from "chart.js";
import { Row , Col } from "antd";
function NumBer() {
    

    return (
        <div className='  w-full h-full shadow-md'>
            {/* Doughnut chart */}
            {/* <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1> */}

                <Row className='  w-full h-1/4 '>
                <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 radio-font text-center text-gray-500'>
                    จำนวนผู้เข้าชมที่ไม่ตอบแบบสอบถาม
                </Col>
                <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 radio-font text-center text-gray-500'>
                    จำนวนผู้เข้าชมที่ตอบแบบสอบถาม
                </Col>
                </Row>
                <Row className="w-full h-3/4 border-solid ">
                <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 foot-font text-center '>
                    0
                </Col>
                <Col className='pt-0  w-1/2 h-fit my-auto  pb-2 foot-font text-center '>
                    10
                </Col>
                </Row>


        </div>
    )
}

export default NumBer;