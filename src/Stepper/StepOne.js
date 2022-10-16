import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import data from '../FormJson/formJson';

const StepOne = ({ nextStep, handleFormData, values }) => {

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
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
          {
                        data.form.section1.map(formData => {
                            return (
                                <div>
                                    <h1>
                                        {formData.title}
                                    </h1>
                                    {
                                        formData.field.map(inputData => {
                                            return (
                                                <Form.Group className="mb-3">
                                                <Form.Label>{inputData.lable}</Form.Label>
                                                <Form.Control
                                                  style={{ border: error ? "2px solid red" : "" }}
                                                  name={inputData.name}
                                                  defaultValue={values[inputData.name]}
                                                  type={inputData.type}
                                                  placeholder={inputData.lable}
                                                  onChange={handleFormData(inputData.name)}
                                                  required={inputData.required}
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
                                        })
                                    }
                                </div>
                            )
                        })
                    }
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;