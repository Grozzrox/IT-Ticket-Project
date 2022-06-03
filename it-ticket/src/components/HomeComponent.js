import React, { Component } from 'react';
import tabData from '../data/tabData';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';


function RenderTabs({handleToggle, isSelected}) {
    return(
        <div className="row tab-shadow">
        <Nav justified tabs>
            <NavItem>
            <NavLink
                className={isSelected === 1 || isSelected === 0 ? "active" : null}
                id={"1"}
                onClick={handleToggle}
            >
                Dashboard
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={isSelected === 2 ? "active" : null}
                id={"2"}
                onClick={handleToggle}
            >
                Tickets
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={isSelected === 3 ? "active" : null}
                id={"3"}
                onClick={handleToggle}
            >
                Errors
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={isSelected === 4 ? "active" : null}
                id={"4"}
                onClick={handleToggle}
            >
                Admin
            </NavLink>
            </NavItem>
        </Nav>
        <TabContent className="mt-5" activeTab={isSelected ? "1" : "2"}>
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
        this.state = { isSelected: 0};
    }

    handleToggle = (event) => {
        this.setState({ isSelected: Number(event.target.id) });
        console.log(this.isSelected);
        
    }

    render() {
        const isSelected = this.state.isSelected;
        return( 
            <div className="mt-2 container">
                <RenderTabs 
                isSelected={isSelected}
                handleToggle={this.handleToggle}/>
            </div>
        );
    }
    
}

export default Home;
