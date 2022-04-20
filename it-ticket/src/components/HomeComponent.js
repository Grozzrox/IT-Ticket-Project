import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function RenderCard() {
    return(
            <Card>
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is the card text.</CardText>
                    <Button color="success" outline>Click Me</Button>
                </CardBody>
            </Card>
    );
}

function Home() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard />
                </div>
                <div className="col-md m-1">
                    <RenderCard />
                </div>
                <div className="col-md m-1">
                    <RenderCard />
                </div>
            </div>
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard />
                </div>
                <div className="col-md m-1">
                    <RenderCard />
                </div>
                <div className="col-md m-1">
                    <RenderCard />
                </div>
            </div>
        </div>
    )
}

export default Home;