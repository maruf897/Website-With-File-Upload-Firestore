import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  return (
    <Form className="m-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={loginData.email}
          onChange={(e) =>
            setloginData({ ...loginData, email: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setloginData({ ...loginData, password: e.target.value })
          }
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Login
      </Button>
    </Form>
  );
}
