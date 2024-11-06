import React, { Component} from 'react';
import {
    Box,
    Heading,
    Grommet,
} from 'grommet';

import './App.css';

const theme = {
    global: {
        colors: {
            brand: '#00739D',
            focus: '#00739D'
        },
        font: {
            family: 'Lato',
        },
    },
};

export class NoMedHistFound extends Component {
    componentDidMount() {
    }
    render() {
        const Header = () => (
            <Box
                tag='header'
                background='linear-gradient(135deg, #00739D 0%, #007bff 50%, #00bfff 100%)'
                pad='small'
                elevation='small'
                justify='between'
                direction='row'
                align='center'
                flex={false}
            >
                <a style={{ color: 'white', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'> 🏥 CIKITSA</Heading></a>

            </Box>
        );
        const Body = () => (
            <div className="container">
                <div className="panel panel-default p50 uth-panel" >
                    <Heading alignSelf="center" textAlign="right" margin="large">Medical History Not Found<br /></Heading>
                </div>
            </div>
        );
        return (
            <Grommet full={true} theme={theme}>
                <Box fill={true}>
                    <Header />
                    <Body />
                </Box>
            </Grommet>
        );
    }
}
export default NoMedHistFound;