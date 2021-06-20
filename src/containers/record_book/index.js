import React, { useState } from 'react';
import { Layout, Form, Input, Button, Row, Col, Select, TimePicker } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const Record_Book = (props) => {
    const [timeValue, setTimeValue] = useState('');

    function onTimeChange(time, timeString) {
        console.log(time,timeString);
        setTimeValue(timeString);
    }

    const onFinish = (values) => {
        console.log(values);
        const newValues = {...values, read_time: timeValue};
        props.BOOK_OBJ({ type: 'ADD_OBJ_BOOK', inputObjBook: newValues });
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
                    <Select
                        placeholder="Select a book url"
                        
                        
                    >
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/a5dfa64040cd53629f83460a35ab94e6a21d6897__300x0">Shaman</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/0628f528734e70fd8e8b1c964338f889907312dc__300x0">Libra Shrugged</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/733a9d6c5c5fe88438334ad284731270b2fd818b__300x0">Star-Spangled Panties</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/6cdde68537bfcad3103bf69543f74295dfd1e443__300x0">Arcade in a Box</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/e572195142ccc816d85aeabfa7cf74afebd28c5e__300x0">Cooking With Columbo</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/5d3bfa1e7ff810d62ecb16d2a69da6de1a7eb3e5__300x0">Q is for Quantum</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/39d311404acd579b5a0f647d6df7f9f1598da4be__300x0">Bums No More</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/0f934e8ed08241338cfe10d724eb4ce3f08ae4a9__300x0">The Doors Unhinged</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/0fc41470c47d03a2e1473bb952baf4e4df620604__300x0">How Design Makes the World</Option>
                        <Option value="https://dwtr67e3ikfml.cloudfront.net/bookCovers/d6444a6cc59df83ec7d8f86052a29462e3522fe4__300x0">Witnessing Bigfoot</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="เวลาที่ให้อ่าน"
                    name="read_time"
                    rules={[{ required: true, message: 'โปรดใส่เวลาที่ให้อ่าน' }]}
                >
                    <TimePicker onChange={onTimeChange} />
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

const mapStateToProps = (state) => {
    return {
        book_obj: state.book_ctrl.arrObjBook,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        BOOK_OBJ: (action) => dispatch(action),


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Record_Book)
