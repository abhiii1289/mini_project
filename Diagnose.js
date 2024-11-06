import React, { Component } from 'react';
import {
  Box,
  Button,
  Heading,
  Form,
  TextArea,
  Grommet
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
var diagnosis;
var prescription;
var id;
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

const DiagnosisTextArea = () => {
  const [value, setValue] = React.useState(" ");

  const onChange = event => {
    setValue(event.target.value);
    diagnosis = event.target.value;
  };

  return (
    <Grommet theme={theme}>
      <h4>Diagnosis</h4>
      <TextArea
        placeholder="Enter Diagnosis"
        label="Enter Diagnosis"
        value={value}
        onChange={onChange}
        style={{width:"50vw", height:"12vw"}}
        fill
        required />
    </Grommet>
  );
};

const PrescriptionTextArea = () => {
  const [value, setValue] = React.useState(" ");
  const onChange = event => {
    setValue(event.target.value);
    prescription = event.target.value;
  };
  return (
    <Grommet theme={theme}>
        <h4>Prescription</h4>
        <TextArea
          placeholder="Enter Prescription"
          label="Enter Prescription"
          value={value}
          style={{width:"50vw", height:"12vw"}}
          onChange={onChange} fill
          required />
    </Grommet>
  );
};

export class Diagnose extends Component {
  constructor(props) {
    super(props);
    id = props.match.params.id;
  }
  render() {
    return (
      <Grommet theme={theme} full>
        <AppBar>
        <a style={{ color: 'white', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'> 🏥 CIKITSA</Heading></a>
        </AppBar>
        <Box align="center" gap="small">
          <Form
            onSubmit={({ value }) => {
              fetch("http://localhost:3001/diagnose?diagnosis=" + diagnosis + "&prescription=" + prescription
              + "&id=" + id).then(()=>{
              })
              window.alert("Diagnosis Submitted!");
            }}
          >
            <DiagnosisTextArea />
            <PrescriptionTextArea />
            <br />
            <Box align="center">
            <Button
              label="Submit Diagnosis"
              type="submit"
              primary
            />
            </Box>
          </Form>
        </Box>
      </Grommet>
    );
  }
}
export default Diagnose;