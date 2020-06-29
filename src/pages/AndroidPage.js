import React from "react";
import Title from "antd/lib/typography/Title";
import Privacy from '../papers/Privacy2020.pdf';

export class AndroidPage extends React.Component {
    render() {
        return <div className='app-content'>
            <Title className='subheader'>Android</Title>


            <div className="section">

                <p className='app-text'>
                    Investigating privacy and security issues in application software network and documentation.
                </p>

                <Title level={3} className='subtitle research'>Privacy-Related Code in Mobile Apps</Title>
                <p className='research-details'>Completed - explained in <a href={Privacy} target="_blank">this
                    paper</a></p>
                <p className='app-text section-text'>
                    Android application data leakage remains pervasive,
                    despite advancements in leakage detection and user protections.
                    This research introduces PrivSense, a light-weight tool designed
                    to detect privacy-related code. PrivSense uses Natural Language Processing techniques to
                    capture the semantic meanings of variables, classes, methods, etc.,
                    and determines the private data an app is likely to collect.</p>
            </div>
        </div>;
    }
}