import React, { Component } from 'react';
import tabData from '../data/tabData';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function RenderContent({tabData}) {
    return(
        tabData.map( (card) => {
            return(
            <Col key={card.id} sm="6">
                <Card className="card" body>
                    <CardTitle>
                    {card.name}
                    </CardTitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                    Go somewhere
                    </Button>
                </Card>
            </Col>
            )
        })
    )
}

function RenderNavlink({handleToggle, isSelected, tabData}) {
    return(
        tabData.map( (tab) => {
            return(
            <NavItem key={tab.id}>
                <NavLink
                    className={isSelected === tab.id ? "active" : null}
                    id={tab.id}
                    onClick={handleToggle}
                >
                    {tab.name}
                </NavLink>
            </NavItem>
            )
        })
    )
}


function RenderTabs({handleToggle, isSelected}) {
    return(
        <div className="row tab-shadow">
        <Nav justified tabs>
            <RenderNavlink
            handleToggle={handleToggle}
            isSelected={isSelected}
            tabData={tabData} />
        </Nav>
        <TabContent className="mt-5" activeTab={!isSelected ? "1" : String(isSelected)}>
            <TabPane tabId="1">
            <Row>
                <Col sm="12">
                <h4>
                    Tab 1 Contents
                </h4>
                </Col>
            </Row>
            </TabPane>
            <TabPane tabId="2">
            <Row>
                <RenderContent tabData={tabData} />
            </Row>
            </TabPane>
            <TabPane tabId="3">
            <Row>
                <Col sm="12">
                <h4>
                    Tab 3 Contents
                </h4>
                </Col>
            </Row>
            </TabPane>
            <TabPane tabId="4">
            <Row>
                <Col sm="12">
                <h4>
                    Tab 4 Contents
                </h4>
                </Col>
            </Row>
            </TabPane>
        </TabContent>
        </div>
    );
}


class Home extends Component {
    constructor() {
        super();
        this.state = { isSelected: 1};
    }

    handleToggle = (event) => {
        this.setState({ isSelected: Number(event.target.id) });
        console.log(this.state);
        
    }

    render() {
        const isSelected = this.state.isSelected;
        return( 
            <div className="container">
                <RenderTabs 
                isSelected={isSelected}
                handleToggle={this.handleToggle}/>
            </div>
        );
    }
    
}

export default Home;
