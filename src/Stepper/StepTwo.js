import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import data from "../FormJson/formJson";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        if (validator.isEmpty(values.phone)) {
            setError(true);
        } else {
            nextStep();
        }
    };
    return (

        <>
            <Card style={{ marginTop: 100 }}>
                <Card.Body>
                    <Form onSubmit={submitFormData}>
                        {
                            data.form.section2.map(formData => {
                                return (
                                    <>
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
                                        <div>
                                            {
                                                formData.select.map(inputData => {
                                                    return (
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>{inputData.lable}</Form.Label>
                                                            <Form.Select
                                                                style={{ border: error ? "2px solid red" : "" }}
                                                                placeholder="Gender"
                                                                onChange={handleFormData(inputData.name)}
                                                            >{
                                                        inputData.options.map(dataOptions => {
                                                            return(
                                                                <option defaultValue={values[inputData.options]}>
                                                                    {dataOptions.option}
                                                                </option>
                                                                )
                                                        }
                                                                )}
                                                            </Form.Select>
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
                                    </>

                                )
                            })
                        }

                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Button variant="primary" onClick={prevStep}>
                                Previous
                            </Button>

                            <Button variant="primary" type="submit" onClick={onSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default StepTwo;