import React from "react";
import Title from "antd/lib/typography/Title";

export class IotPage extends React.Component {
    render() {
        return <div className='app-content'>
            <Title className='subheader'>IoT</Title>


            <div className="section">

                <p className='app-text'>
                    Investigating hardware and software security
                    issues in IoT firmware, networks and hardware.
                </p>

                <Title level={3} className='subtitle research'>Vulnerabilities in IoT Update</Title>
                <p className='research-details'>In progress</p>
                <p className='app-text section-text'>
                    With more individuals telecommuting the utilization of IoT Devices is at its highest ever. Some of
                    these devices are targeted by attackers through different vulnerabilities in the IoT devices one
                    area of vulnerability is the update channel. This study focuses on plugging the vulnerabilities in
                    the update channel of IoT devices.
                </p>
            </div>
        </div>;
    }
}