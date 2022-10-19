import React, { useState } from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import validator from "validator";
import data from '../FormJson/formJson.json';
import { useNavigate } from 'react-router-dom';
import '../App.css'



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    // window.alert(JSON.stringify(values, 0, 2))
}


const Step2 = ({ nextStep, handleFormData, values }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const prevStep = () => {
        navigate('/Step1')
    }

    const submitFormData = (e) => {
        e.preventDefault();

        if (validator.isEmpty(values.phone)) {
            setError(true);
        } else {
            navigate('/Step3')
        }
    };
    return (
        <Container>
            <Card style={{ margin: 100, border: 'none' }}>
                <Card.Body className="card-style">
                    <Form onSubmit={submitFormData}>
                        {
                            data[0].section2.map(formData => {
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
                                                            <Form.Label>{inputData.label}</Form.Label>
                                                            <Form.Control
                                                                style={{ border: error ? "2px solid red" : "" }}
                                                                name={inputData.name}
                                                                defaultValue={values[inputData.name]}
                                                                type={inputData.type}
                                                                placeholder={inputData.label}
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
                                                formData.select.map(selectData => {
                                                    return (
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>{selectData.label}</Form.Label>
                                                            <Form.Select
                                                                style={{ border: error ? "2px solid red" : "" }}
                                                                placeholder="Gender"
                                                                onChange={handleFormData(selectData.name)}
                                                            >{
                                                                    selectData.options.map(dataOptions => {
                                                                        return (
                                                                            <option defaultValue={values[dataOptions.value]}>
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
        </Container>
    );
};
export default Step2;