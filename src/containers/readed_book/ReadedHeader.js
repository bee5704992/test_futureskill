import React from 'react';
import { Row, Select, Input } from 'antd';

const { Option } = Select;
const { Search } = Input;

const ReadedHeader = () => {
    const onSearch = value => console.log(value);

    function handleChangeSearch(value) {
        console.log(`selected ${value}`);
    }

    let sort_by_select = (
        <>
            <Select defaultValue="book_name" style={{ width: 120,marginLeft:'10px' }} onChange={handleChangeSearch}>
                <Option value="book_name">ชื่อหนังสือ</Option>
                <Option value="rating">ความนิยม</Option>
            </Select>
        </>
    )

    return (
        <div className="readed-header">
            
            
            <Row justify="end" >
                <div style={{marginRight:'30px'}} >
                    <Search placeholder="หนังสือที่ต้องการค้นหา" allowClear onSearch={onSearch} style={{ width: '30vw' }} enterButton/>
                </div>

                <div style={{marginRight:'30px',color:'white'}}>
                    sort by
                    {sort_by_select}
                </div>
            </Row>
           
        </div>
    )
};

export default ReadedHeader;