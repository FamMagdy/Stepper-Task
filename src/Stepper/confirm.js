import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { FirstName, LastName, age, email, phone, gender } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
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
    </>
  );
};

export default Final;