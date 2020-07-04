import React from "react";
import {Typography} from 'antd';
import {Link} from "react-router-dom";

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
                	Advances in computer systems over the past decade have laid
                    a solid foundation for data collection at a staggering scale. Data generated from end-user devices
                    has tremendous value to the research community. For example, <Link to='/android'>mobile</Link> and
                    <Link to='/iot'> Internet-of-Things</Link> devices
                    can participate in large-scale Internet-based measurement or monitoring of patient's health
                    conditions. While ground-breaking discovered may occur, malicious attacks or unintentional data
                    leaks threaten the research data. Such a threat is hard to predict and difficult to recover from
                    once it happens. Preventative and defensive measures should be taken where data is generated in
                    order to protect private, valuable data from the attackers. Currently, there are efforts that try to
                    regulate data management, for example, a research application might have a privacy policy that
                    describes how the user data is being collected and protected. However, there is a disconnect between
                    these documented policies and the implementations of a research project. In this project, the
                    investigators propose to interpret the documented policies and enforce them in research projects, in
                    order to protect the privacy of research data. This work can significantly reduce researchers'
                    overhead in implementing policy-compliant code and reduce the complexity of protecting research
                    datasets. The system utilizes <Link to='/nlp'>Natural Language Processing (NLP)</Link> techniques 
                    to extract security and
                    privacy requirements from unstructured regulatory documents and translates these requirements to
                    code that can patch a program that does not comply with the policies.

                    {/*//Data leakage remains pervasive, despite advancements in leakage detection and user protections.
                    //As the world grows more connected, there are growing difficulties to protect the security,
                    //integrity,
                    //and privacy of data. Preventative and defensive measures should be taken where data is generated,
                    //and protect those private, valuable data from the outset.*/}
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

                <div className="section">
                	<Title level={3} className='ack'>Acknowledgements</Title>
                	<Paragraph className='app-text section-text ack-text'>
                    This material is based upon work supported by the National Science Foundation under Grant No.
                    1920462. Any opinions, findings, and conclusions or recommendations expressed in this material are
                    those of the author(s) and do not necessarily reflect the views of the National Science Foundation.
                </Paragraph>
                </div>

            </div>

        </div>
            ;
    }
}