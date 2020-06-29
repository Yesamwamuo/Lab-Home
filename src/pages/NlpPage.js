import React from "react";
import Title from "antd/lib/typography/Title";

export class NlpPage extends React.Component {
    render() {
         return <div className='app-content'>
            <Title className='subheader'>NLP</Title>


            <div className="section">

                <p className='app-text'>
                    Investigating privacy and security issues in application software, networks and documentation.
                </p>

                <Title level={3} className='subtitle research'>Enforcing Privacy and Security Regulations </Title>
                <p className='research-details'>In progress</p>
                <p className='app-text section-text'>
                  In this project, the investigators provide a solution that protects research data using policies mandated by different regulatory entities, such as an application store and an Institutional Review Board (IRB). The system utilizes Natural Language Processing (NLP) techniques to extract security and privacy requirements from unstructured regulatory documents and translates these requirements to code that can patch a program that does not comply with the policies. The solution covers the lifetime of research data protection, from data collection to data storage, and data processing. </p>
            </div>
        </div>;
    }
}