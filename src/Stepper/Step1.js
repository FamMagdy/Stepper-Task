import React, { useState } from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import validator from "validator";
import data from '../FormJson/formJson.json';
import { useNavigate } from 'react-router-dom';
import '../App.css'


const Step1 = ({ handleFormData, values }) => {

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.FirstName) ||
      validator.isEmpty(values.LastName) ||
      validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      // nextStep();
      navigate('../step/2')
    }
  };

  return (
    <Container>
    <div>
      <Card style={{ margin: 100, border:'none' }}>
        <Card.Body className="card-style">
          <Form onSubmit={submitFormData}>
            {
              data[0].section1.map((dataItem,key) => {
                return (
                  <div key={key}>
                    <h1>
                      {dataItem.title}
                    </h1>
                    {
                      dataItem.field.map(dataInput => {
                        return (

                          <Form.Group className="mb-3">
                            <Form.Label>{dataInput.label}</Form.Label>
                            <Form.Control
                              style={{ border: error ? "2px solid red" : "" }}
                              name={dataInput.name}
                              defaultValue={values[dataInput.name]}
                              type={dataInput.type}
                              placeholder={dataInput.label}
                              onChange={handleFormData(dataInput.name)}
                              required={dataInput.required}
                            />
                            {error ? (
                              <Form.Text style={{ color: "red" }}>
                                This is a required field
                              </Form.Text>
                            ) : (
                              ""
                            )}
                          </Form.Group>
                        )
                      })}
                  </div>
                )
              })}
            <Button variant="primary" type="submit" disabled={!setError} onClick={submitFormData}>
              Continue
            </Button>
            {/* <StepperNav current={1} prevDisabled={false} nextDisabled={!error} /> */}
          </Form>
        </Card.Body>
      </Card>
    </div>
    </Container>
  );
}
export default Step1;