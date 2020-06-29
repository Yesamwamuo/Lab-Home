import React from "react";
import {Card, Avatar, Typography} from 'antd';
import {Link} from "react-router-dom";

const {Paragraph, Title, Text} = Typography;
const {Meta} = Card

export class PeoplePage extends React.Component {
    render() {
        return <div className='app-content'>

            <Title level={3} className='subtitle'>Faculty</Title>
            <ul className='people-list'>
                <li className='people-item' key={1}>
                    <Title className='app-text'><a target="_blank" href="https://www.ytian.info/">Prof. Yuan Tian</a></Title>
                    <Text className='sub-text'>University of Virginia</Text></li>
                <li className='people-item' key={1}>
                    <Title className='app-text'><a target="_blank" href="http://cs.uccs.edu/~yzhuang/">Prof. Yanyan Zhuang</a></Title>
                    <Text className='sub-text'>University of Colorado, Colorado Springs</Text>
                </li>
                <li className='people-item' key={1}>
                    <Title className='app-text'><a target="_blank" href="http://web.cs.ucla.edu/~kwchang/">Prof. Kai-Wei
                        Chang</a></Title>
                    <Text className='sub-text'>University of California, Los Angeles</Text></li>
            </ul>

            <Title level={3} className='subtitle'>Students</Title>
            <ul className='people-list'>
                <li className='people-item' key={1}>
                    <Title level={5} className='app-text'>Wayne Havey</Title>
                    <Text className='sub-text'>University of Colorado, Colorado Springs</Text></li>
                <li className='people-item' key={2}>
                    <Title level={5} className='app-text'>Emmanuel Wamuo</Title>
                    <Text className='sub-text'>University of Colorado, Colorado Springs</Text></li>
                <li className='people-item' key={3}>
                    <Title level={5} className='app-text'>Austen Knapp</Title>
                    <Text className='sub-text'>University of Colorado, Colorado Springs</Text></li>
            </ul>

            <Title level={3} className='subtitle'>Collaborators</Title>

            <ul className='people-list'>
                <li className='people-item' key={1}>
                    <Title className='app-text'><a target="_blank" href="https://badhomb.re/">Dr. Santiago Torres-Arias</a></Title>
                    <Text className='sub-text'>Purdue University</Text></li>
            </ul>
        </div>;
    }
}