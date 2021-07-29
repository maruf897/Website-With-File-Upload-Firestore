import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function RegisterUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    sex: "",
  });

  const sendData = async () => {
    const res = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.json());
  };

  return (
    <Form className="m-5" action="http://localhost:3004/users" method="post">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={data.name}
          name="name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={data.email}
          name="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Male"
          name="sex"
          value="M"
          onChange={(e) => setData({ ...data, sex: e.target.value })}
        />
        <Form.Check
          type="checkbox"
          label="Female"
          name="sex"
          value="F"
          onChange={(e) => setData({ ...data, sex: e.target.value })}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={
          !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(
            data.email
          )
        }
        onClick={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        Submit
      </Button>
    </Form>
  );
}
