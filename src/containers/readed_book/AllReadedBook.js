import React, { useState } from 'react';
import { Row, Col, Button, Form, Select, TimePicker, Input } from 'antd';
import { connect } from 'react-redux';
import { EyeOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const AllReadedBook = (props) => {
    const [timeValue, setTimeValue] = useState('');

    function onTimeChange(time, timeString) {
        console.log(time, timeString);
        setTimeValue(timeString);
    }

    const onFinish = (values) => {
        console.log(values);
        const newValues = { ...values, read_time: timeValue };
        props.update_book({ type: 'UPDATE_OBJ_BOOK', editValues: newValues})
        props.edit_book({ type: 'EDIT_OBJ_BOOK' });
    };

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };

    let formEdit;
    if (props.isEdit === true) {
        formEdit = (
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', position: 'fixed', width: '100vw', height: '100vw', top: '0px', left: '0px', zIndex: 1001,minHeight:'700px' }}>
                <Row justify='center'>
                    <div style={{ boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.2)', width: '80vw', padding: '30px', backgroundColor: 'white', position:'absolute', top: '15vh', maxWidth:'500px' }}>
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
                    </div>
                </Row>
            </div>
        )
    };

    let contents = (
        <>

            {props.book_obj.map(
                item =>
                    <div key={item.book_name} style={{ padding: '30px' }} >

                        <div style={{ background: '#f1fff6', padding: '20px' }}>
                            <Row justify='space-around' align='middle'>
                                <div style={{ display: 'inline-block' }}>
                                    <img src={item.book_url} width='150px' />
                                </div>

                                <div style={{ display: 'inline-block', width: '90%', paddingLeft: '20px' }}>
                                    <div>
                                        <h1>{item.book_name}</h1>
                                        by: <b>{item.author}</b><br />

                                        {item.main_content}<br />

                                        เวลาที่สามารถอ่านได้: {item.read_time}<br />
                                    </div>
                                    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                                        <Button className='edit-but' ghost style={{ margin: '3px' }} onClick={() => props.edit_book({ type: 'EDIT_OBJ_BOOK', book_name: item.book_name })}>
                                            Edit
                                        </Button>
                                        <Button ghost style={{ margin: '3px' }} onClick={() => props.del_book({ type: 'DEL_OBJ_BOOK', book_name: item.book_name })}>
                                            Delete
                                        </Button>
                                        <Button style={{ margin: '3px' }}>
                                            <EyeOutlined style={{ marginRight: '5px', position: 'relative', top: '-2px' }} />
                                            read
                                        </Button>
                                    </div>
                                </div>
                            </Row>
                        </div>

                    </div>
            )}
        </>
    )

    return (
        <div>
            {formEdit}
            {contents}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        book_obj: state.book_ctrl.arrObjBook,
        isEdit: state.book_ctrl.isEdit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        del_book: (action) => dispatch(action),
        edit_book: (action) => dispatch(action),
        update_book: (action) => dispatch(action),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllReadedBook);