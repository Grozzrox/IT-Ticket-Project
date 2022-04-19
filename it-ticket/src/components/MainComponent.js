import React, { Component } from 'react';
import Home from './HomeComponent';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <HomePage />
            </div>
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return(
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default Main;