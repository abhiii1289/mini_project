import React, { Component, useState } from 'react';
import {
    Box,
    Button,
    Heading,
    Grommet,
    Grid,
    Text,
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

const SidebarButton = ({ label, ...rest }) => (
    <Button plain {...rest}>
        {({ hover }) => (
            <Box
                background={hover ? "#DADADA" : undefined}
                pad={{ horizontal: "large", vertical: "medium" }}
            >
                <Text size="large">{label}</Text>
            </Box>
        )}
    </Button>
);

const SidebarButtons = () => {
    const [active, setActive] = useState();
    return (
        <Grommet full theme={theme}>
            <Box fill direction="row">
            <Box background="linear-gradient(135deg, #00739D 0%, #007bff 50%, #00bfff 100%)">  
                    {["Appointments", "View Patients", "Settings", "Sign Out"].map(label => (
                        <SidebarButton
                            key={label}
                            label={label}
                            active={label === active}
                            onClick={() => {
                                if (label === "Appointments") {
                                    window.location = "/ApptList"
                                }
                                else if (label === "Sign Out") {
                                    fetch("http://localhost:3001/endSession");
                                    window.location = "/"
                                }
                                else if (label === "Settings") {
                                    window.location = "/DocSettings"
                                }
                                else if (label === "View Patients") {
                                    window.location = "/MedHistView"
                                }
                                setActive(label);
                            }}
                        />
                    ))}

                </Box>
            </Box>
        </Grommet>
    );
};

export class DocHome extends Component {
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
                style={{borderBottom:"1px linear-gradient(135deg, #00739D 0%, #007bff 50%, #00bfff 100%) black"}}
            >
                <a style={{ color: 'white', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'> 🏥 CIKITSA</Heading></a>

            </Box>
        );

        return (
            <Grommet full={true}
                theme={theme}>
                <Box align="left">
                    <Header/>
                    <Grid
                        fill
                        rows={['auto', 'flex']}
                        columns={['auto', 'flex']}
                        areas={[
                            { name: 'sidebar', start: [0, 1], end: [0, 1] },
                            { name: 'main', start: [1, 1], end: [1, 1] },
                        ]}>
                        <Box
                        gridArea="sidebar"
                        width="small"
                        animation={[
                        { type: 'fadeIn', duration: 300 },
                        { type: 'slideRight', size: 'xlarge', duration: 150 },
                        ]}
                        >
                            <SidebarButtons />
                        </Box>
                        <Box
                            gridArea="main"
                            justify="top"
                            align="center">
                            <Box align="center" pad="large">
                                <Heading
                                    color="#00739D">Welcome Doctor
                                </Heading>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Grommet>
        );
    }
}

export default DocHome;