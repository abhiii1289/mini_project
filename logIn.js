import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
  Box,
  Button,
  Heading,
  Grommet,
  FormField,
  Form,
  CheckBox,
} from 'grommet';

import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#00739D',
      focus: "#00739D",
      active: "#00739D",
    },
    font: {
      family: 'Lato',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='linear-gradient(135deg, #00739D 0%, #007bff 50%, #00bfff 100%)'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props} />
);

class LogIn extends Component {
  state = { isDoctor: false }

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = '/Home';
    this.props.history.push(path);
  }

  render() {
    const { isDoctor } = this.state; // If doctor, will query from doctor table

    return (
      <Grommet theme={theme} full>
        <AppBar>
        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="/">
  <Heading level='3' margin='none'> 🏥 CIKITSA</Heading>
</a>
        </AppBar>

        <Box
          fill
          align="center"
          justify="top"
          pad="medium">
          <Box
            width="medium"
            pad="medium">
            <Form

              onReset={event => console.log(event)}
              onSubmit={({ value }) => {
                console.log("Submit", value);
                if (value.isDoc === true) {
                  fetch("http://localhost:3001/checkDoclogin?email=" + value.email +
                    "&password=" + value.password)
                    .then(res => res.json())
                    .then(res => {
                      if (res.data.length === 0) {
                        window.alert("Invalid Log In");
                      } else {
                        window.location = "DocHome";
                        console.log(res.data);
                      }
                    });
                } else {
                  fetch("http://localhost:3001/checklogin?email=" + value.email +
                    "&password=" + value.password)
                    .then(res => res.json())
                    .then(res => {
                      if (res.data.length === 0) {
                        window.alert("Invalid Log In");
                      } else {
                        window.location = "/Home";
                        console.log(res.data);
                      }
                    });
                }
              }
              }>
              <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Please enter your email"
              required
              style={{
                fontSize: '1.2rem',
                color: '#black',
                transition: 'box-shadow 0.3s',
              }}
              // inputStyle={{
              //   color: 'black',
              //   border: 'none',
              //   outline: 'none',
              //   background: 'transparent',
              //   fontSize: '1.2rem',
              // }}
              // labelStyle={{
              //   fontWeight: 'bold',
              //   color: '#00739D',
              // }}
            />

              <FormField
                color="#00739D"
                type='password'
                label="Password"
                name="password"
                placeholder = "Please enter your password"
                required />
              <FormField
                component={CheckBox}
                checked={isDoctor}
                margin="large"
                label="I'm a Doctor"
                name="isDoc"
                onChange={(event) => {
                  this.setState({ isDoctor: event.target.checked })
                }}
                style={{ display: 'flex', alignItems: 'center' }}

              />
              <Box direction="column" align="center" >
                <Button style={{ textAlign: 'center' , margin:'1rem',
                width: '100%',
                margin: '0.5rem',
                padding: '0.75rem 1.5rem',}}
                 type="submit" label="Log In" fill="horizontal" primary />
                <Button label="Create Account"
                style={{ width: '100%', borderRadius: '20px' ,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                margin: '0.5rem',
                padding: '0.75rem 1.5rem',}}
                fill="horizontal"
                  href="/createAcc" />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
}
export default withRouter(LogIn);