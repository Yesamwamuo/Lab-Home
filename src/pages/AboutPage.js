import React from "react";
import {Typography} from 'antd';
import {Link} from "react-router-dom";


const {Paragraph, Title} = Typography;


export class AboutPage extends React.Component {
    render() {
        return <div className='app-content'>
            <Title className='subheader'>Overview</Title>


            <div className="section">
                <Paragraph className='app-text section-text'>
                </Paragraph>

                

            </div>
        </div>;
    }
}