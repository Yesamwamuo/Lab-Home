import React from "react";
import {Typography, Space} from 'antd';

const {Title, Text} = Typography;

export class HomePage extends React.Component {
    render() {
        return <div onClick={console.log('shabba')}>
            <div className="section">
                <Title level={3} className='title'>Android Research</Title>
                <Title level={4} className='desc'>Research investigating privacy and security issues in Android</Title>
                <ul>
                    {
                        this.props.androidResearch.map((item, pos) => <li key={pos}><Text>{item}</Text></li>)
                    }
                </ul>
            </div>
            <div className="section">
                <Title level={3} className='title'>IoT Research</Title>
                <Title level={4} className='desc'>Research investigating hardware and software security issues in Iot</Title>
                <ul>
                    {
                        this.props.iotResearch.map((item, pos) => <li key={pos}><Text>{item}</Text></li>)
                    }
                </ul>
            </div>
        </div>;
    }
}