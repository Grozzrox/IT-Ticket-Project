import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function RenderTabs({handleToggle, isActive}) {
    return(
        <div className="row tab-shadow">
        <Nav justified tabs>
            <NavItem>
            <NavLink
                className={isActive ? "active" : null}
                onClick={handleToggle}
            >
                Tab1
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={isActive ? null : "active"}
                onClick={handleToggle}
            >
                More Tabs
            </NavLink>
            </NavItem>
        </Nav>
        <TabContent className="mt-5" activeTab={isActive ? "1" : "2"}>
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
                <Col sm="6">
                <Card body>
                    <CardTitle>
                    Special Title Treatment
                    </CardTitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                    Go somewhere
                    </Button>
                </Card>
                </Col>
                <Col sm="6">
                <Card body>
                    <CardTitle>
                    Special Title Treatment
                    </CardTitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                    Go somewhere
                    </Button>
                </Card>
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
        this.state = { isActive: false};
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
        console.log(this.state.isActive);
    }

    render() {
        const isActive = this.state.isActive;
        return( 
            <div className="mt-1 container">
                <RenderTabs 
                handleToggle={this.handleToggle}
                isActive={isActive} />
            </div>
        );
    }
    
}

export default Home;