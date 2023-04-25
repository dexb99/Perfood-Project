import React from 'react'

export default function restorecode() {
    return (
        <Form.Item className='p-4 bg-transparent shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
            <Form.Item className='p-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                <Form.Item className=' h-auto'>
                    <div className=' w-full flex p-1' >
                        <Input placeholder='หัวข้อคำถาม' className='h-10 font-itim rounded-none border-none' />
                        <div className=' items-center bg-white h-10 rounded-none p-1 flex font-itim'>
                            <Link className=' px-5 hover:text-white text-yellow-500' href="#">ลบ</Link>
                        </div>
                    </div>
                    <div>
                        <Select placeholder="ประเภทคำถาม" className='font-irim p-1'>
                            <Option value="เลือกตัวเลือกเดียว">เลือกตัวเลือกเดียว</Option>
                        </Select>
                        <Button onClick={modalOpen} className=' font-itim  w-full bg-white text-yellow-500 '>จัดการคำตอบ</Button>
                    </div>
                </Form.Item>
            </Form.Item>

            <Form.Item className='p-3 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] pb-0'>
                <Form.Item className=' h-auto'>
                    <div className=' w-full flex p-1' >
                        <Input placeholder='หัวข้อคำถาม' className='h-10 font-itim rounded-none border-none' />
                        <div className=' items-center bg-white h-10 rounded-none p-1 flex font-itim'>
                            <Link className=' px-5 hover:text-white text-yellow-500' href="#">ลบ</Link>
                        </div>
                    </div>
                    <div>
                        <Select placeholder="ประเภทคำถาม" className='font-irim p-1'>
                            <Option value="เลือกตัวเลือกเดียว">เลือกตัวเลือกเดียว</Option>
                        </Select>
                        <Button onClick={modalOpen} className=' font-itim  w-full bg-white text-yellow-500 '>จัดการคำตอบ</Button>
                    </div>

                </Form.Item>

            </Form.Item>
            <Button className=' font-itim bg-white flex justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] px-6 rounded-lg w-full text-yellow-500 '>
                เพิ่มแบบสอบถาม
            </Button>
            )
}
