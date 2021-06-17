import React from 'react';
import { Row, Col } from 'antd';

const AllReadedBook = () => {
    let hardCode = [
        {
            id: 1,
            book_name: 'Shaman: The Mysterious Life and Impeccable Death of Carlos Castaneda',
            author: 'Mike Sager',
            main_content: 'Some say he was a breakthrough academic and visionary shaman. Others say he was a sham. Either way, Carlos Castaneda shaped a generation of mystical thinkers and magic mushroom eaters. A year-long investigation into the mysterious life and impeccable death of Carlos Castaneda, as told by his wife, his adopted son, his mistresses, and his followers.',
            book_url: 'https://dwtr67e3ikfml.cloudfront.net/bookCovers/a5dfa64040cd53629f83460a35ab94e6a21d6897__300x0',
            read_date: 'N/A',
        },
        {
            id: 2,
            book_name: 'Libra Shrugged: How Facebook Tried to Take Over the Money',
            author: 'David',
            main_content: 'Facebook: the biggest social network in the world. But governments were on Facebook’s case over personal data abuses, election rigging and fake news. Mark Zuckerberg wondered: what if Facebook could pivot to finance? Or, better: what if Facebook started its own private world currency? Facebook could have so much power that governments couldn’t stop them. It would be the Silicon Valley dream.',
            book_url: 'https://dwtr67e3ikfml.cloudfront.net/bookCovers/0628f528734e70fd8e8b1c964338f889907312dc__300x0',
            read_date: 'N/A',
        },
        {
            id: 3,
            book_name: 'Star-Spangled Panties',
            author: 'Carol A. Strickland',
            main_content: 'Up the patriarchy! Come read about Wonder Woman, Princess and Champion of the legendary Amazons, presented in an ever-so-slightly opinionated manner that will explain everything important about the lady. She’s been around since 1941, you know, and has seen a lot of changes through the years. If you take your aspirin when warned, you’ll even learn about her popular younger sister, Donna Troy.',
            book_url: 'https://dwtr67e3ikfml.cloudfront.net/bookCovers/733a9d6c5c5fe88438334ad284731270b2fd818b__300x0',
            read_date: 'N/A',
        },
    ];

    let contents = (
        <>
            {hardCode.map(
                item =>
                    <div key={item.id} style={{ padding: '30px' }} >
                        <Row justify='center'>
                            <div style={{display:'inline-block'}}>
                                <img src={item.book_url} width='150px'/>
                            </div>
                            <div style={{display:'inline-block',width:'70%',paddingLeft:'20px'}}>
                                <h1>{item.book_name}</h1>
                                by: {item.author}<br />

                                {item.main_content}<br />

                                Read date: {item.read_date}<br />
                            </div>
                        </Row>
                    </div>
            )}
        </>
    )

    return (
        <div>
            {contents}
        </div>
    );
};

export default AllReadedBook;