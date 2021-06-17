import React, { useState } from 'react';
import { Layout, Form, Input, Button, Row, Col } from 'antd';
const { Content } = Layout;
const { TextArea } = Input;

const Record_Book = () => {


    const onFinish = (values) => {
        console.log(values)
    };

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };

    let FormContents = (
        <div style={{ display: 'inline-block', width: '100%' }} >
            <Form {...layout} onFinish={onFinish}>
                <Form.Item
                    label="ชื่อหนังสือ"
                    name="book_name"
                    rules={[{ required: true, message: 'โปรดใส่ชื่อหนังสือ' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="ชื่อคนเขียน"
                    name="author"
                    rules={[{ required: true, message: 'โปรดใส่ชื่อคนเขียน' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="เนื้อหาหลัก"
                    name="main_content"
                    rules={[{ required: true, message: 'โปรดใส่เนื้อหาหลัก' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="urlปกหนังสือ"
                    name="book_url"
                    rules={[{ required: true, message: 'โปรดใส่urlปกหนังสือ' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="วันเวลาที่อ่าน"
                    name="read_date"
                    rules={[{ required: true, message: 'โปรดใส่วันเวลาที่อ่านจบ' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item style={{ marginBottom: '0' }} >
                    <Row justify='center'>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    );

    return (
        <Layout className='layout' style={{ paddingBottom: '50px' }}>
            <Content>
                <h1 className="header">Record Book</h1>
                <Row justify='center'>
                    <div style={{ boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.2)', width: '775px' }}>
                        <Row justify='center' align='middle' >
                            <div className="container2" style={{ width: '350px', display: 'inline-block', backgroundColor: 'white', padding: '30px' }}>
                                <Row>
                                    {FormContents}
                                </Row>
                            </div>
                            <div style={{ display: 'inline-block', margin: '0' }} >
                                <img src="images/coverBook.jpg" width="425px" />
                            </div>
                        </Row>
                    </div>
                </Row>
            </Content>
        </Layout>
    )
}

export default Record_Book
