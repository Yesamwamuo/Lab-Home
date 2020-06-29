import React from "react";
import {Typography} from 'antd';

const {Paragraph, Title} = Typography;

export class HomePage extends React.Component {
    render() {
        return <div>
            <div id='banner'>
                <p id='banner-title'>Enforcing Security and Privacy Policies to Protect Research Data</p>
                <p id='banner-motto'>Identifying threats and flaws in software systems.</p>
            </div>
            <div className='home-content'>
                <p className='app-text'>
                    Data leakage remains pervasive, despite advancements in leakage detection and user protections.
                    As the world grows more connected, there are growing difficulties to protect the security,
                    integrity,
                    and privacy of data. Preventative and defensive measures should be taken where data is generated,
                    and protect those private, valuable data from the outset.
                </p>
                <p className='app-text section-paragraph'>
                    Our research focuses on the following areas:
                </p>
                <div className="section">
                    <Title level={3} className='subtitle'>NLP</Title>
                    <Paragraph className='app-text section-text'>Analyzing text to detect deviations in
                        policy.</Paragraph>
                </div>
                <div className="section">
                    <Title level={3} className='subtitle home'>Android </Title>
                    <Paragraph className='app-text section-text'>Investigating privacy and security issues in
                        application software network and documentation.</Paragraph>
                </div>
                <div className="section">
                    <Title level={3} className='subtitle'>IoT</Title>
                    <Paragraph className='app-text section-text'>Investigating hardware and software security
                        issues in IoT firmware, networks and hardware.</Paragraph>
                </div>
            </div>

        </div>
            ;
    }
}