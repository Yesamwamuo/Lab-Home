import React from 'react';
import {HashRouter, Link, Route} from "react-router-dom";

import 'normalize.css/normalize.css'
import './styles/App.less';
import {Layout, Menu} from 'antd';
import {HomePage} from "./pages/HomePage";
import {AndroidPage} from "./pages/AndroidPage";
import {IotPage} from "./pages/IotPage";
import {NlpPage} from "./pages/NlpPage";
import {PeoplePage} from "./pages/PeoplePage";
import {SecurityScanOutlined} from "@ant-design/icons";

const {Header, Content, Footer} = Layout;


function App() {
    return (
        <HashRouter basename='/'>
            <Layout className="app">
                <Header className="App-Header">
                    <Link to='/' className="logo">
                        <SecurityScanOutlined style={{fontSize: '25px', color: '#4276e3'}}/>
                        <h2>SSLab</h2>
                    </Link>
                    <Menu mode="horizontal">
                        <Menu.Item key="3"><Link className="nav-text" to="/nlp">NLP</Link></Menu.Item>
                        <Menu.Item key="2"><Link className="nav-text" to="/android">Android</Link></Menu.Item>
                        <Menu.Item key="4"><Link className="nav-text" to="/iot">IoT</Link></Menu.Item>
                        <Menu.Item key="5"><Link className="nav-text" to="/people">People</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content>

                    <Route exact path="/" render={(props) => <HomePage {...props}/>}/>
                    <Route path="/android"
                           render={(props) => <AndroidPage {...props} />}/>
                    <Route path="/iot" render={(props) => <IotPage {...props}/>}/>
                    <Route path="/nlp" component={NlpPage}/>
                    <Route path="/people" component={PeoplePage}/>
                </Content>
                <Footer style={{textAlign: 'center'}}>Secure Software Lab 2020</Footer>
            </Layout>
        </HashRouter>
    );
}

export default App;
