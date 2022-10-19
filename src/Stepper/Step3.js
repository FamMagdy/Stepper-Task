import React from "react";
import { Card, Container } from "react-bootstrap";
import '../App.css'
const Step3 = ({ values }) => {

  const { FirstName, LastName, age, email, phone, gender } = values;
  return (
    <Container>
      <Card style={{ margin: 100, border:'none', textAlign:'justify' }}>
        <Card.Body className="card-style">
          <p>
            <strong>First Name :</strong> {FirstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {LastName}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Gender :</strong> {gender}{" "}
          </p>
          <p>
            <strong>Phone :</strong> {phone}{" "}
          </p>
        </Card.Body>
      </Card>
      </Container>
  );
};

export default Step3;