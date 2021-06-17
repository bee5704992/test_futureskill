import React from 'react'
import { Layout, Row } from 'antd';
import './readed_book.css';
import ReadedHeader from './ReadedHeader';

const { Content } = Layout;


function Readed_Book() {
    return (
        <Layout className='layout'>

            <Content>
                <ReadedHeader />

                <div className="readed-content">

                    <div className="left-readed-content">

                    </div>
                    <div className="right-readed-content">
                    <h1 className="header">Readed Book</h1>
                    </div>
                </div>

            </Content>
        </Layout>
    )
}

export default Readed_Book
