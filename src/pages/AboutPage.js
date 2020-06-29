import React from "react";
import {Typography} from 'antd';
import {Link} from "react-router-dom";


const {Paragraph, Title} = Typography;


export class AboutPage extends React.Component {
    render() {
        return <div className='app-content'>
            <Title className='subheader'>Overview</Title>


            <div className="section">
                <Paragraph className='app-text section-text'>Advances in computer systems over the past decade have laid
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
                    datasets. The system utilizes <Link to='/nlp'>Natural Language Processing (NLP)</Link> techniques to extract security and
                    privacy requirements from unstructured regulatory documents and translates these requirements to
                    code that can patch a program that does not comply with the policies.</Paragraph>

                <Title level={3} className='subtitle'>Acknowledgements</Title>
                <Paragraph className='app-text section-text'>
                    This material is based upon work supported by the National Science Foundation under Grant No.
                    1920462. Any opinions, findings, and conclusions or recommendations expressed in this material are
                    those of the author(s) and do not necessarily reflect the views of the National Science Foundation.
                </Paragraph>

            </div>
        </div>;
    }
}