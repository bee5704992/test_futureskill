import React from 'react'
import { Layout, Row } from 'antd';
import './readed_book.css';
import ReadedHeader from './ReadedHeader';
import AllReadedBook from './AllReadedBook';

const { Content } = Layout;


function Readed_Book() {
    return (
        <Layout className='layout'>

            <Content>
                <ReadedHeader />

                <div className="readed-content">

            
                    
                    <h1 className="header" style={{marginTop:'100px'}}>List of books</h1>
                    <AllReadedBook />
                </div>

            </Content>
        </Layout>
    )
}

export default Readed_Book
