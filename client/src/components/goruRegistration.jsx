import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function GoruRegistration() {
  const [goruData, setgoruData] = useState({
    ownerName: "",
    ownerId: "",
    cowBreed: "",
    sex: "",
    size: "",
    price: "",
    image: "",
  });
  const [submitStatus, setSubmitStatus] = useState(true);

  const uploadImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = new FormData();
      console.log(e.target.files[0]);
      img.append("GoruImage", e.target.files[0]);
      console.log(img);
      const res = await fetch("http://localhost:3004/gorus/images", {
        method: "POST",

        body: img,
      });
      const link = await res.json();
      setgoruData({ ...goruData, image: link });
      setSubmitStatus(!submitStatus);
    }
  };
  const history = useHistory();
  const sendData = async (e) => {
    try {
      const res = await fetch("http://localhost:3004/gorus", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(goruData),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    history.push({
      pathname: "/",
    });
    //window.location.reload(false);
  };

  return (
    <Form className="m-5 w-50 flex-center">
      <Form.Group controlId="formBasicText">
        <Form.Label>Owner Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Owner Name"
          value={goruData.ownerName}
          onChange={(e) =>
            setgoruData({ ...goruData, ownerName: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Owner Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter ID"
          value={goruData.ownerId}
          onChange={(e) =>
            setgoruData({ ...goruData, ownerId: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Breed</Form.Label>
        <Form.Control
          type="text"
          value={goruData.cowBreed}
          onChange={(e) =>
            setgoruData({ ...goruData, cowBreed: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Gender</Form.Label>
        <Form.Check
          type="checkbox"
          label="Male"
          value="M"
          onChange={(e) => setgoruData({ ...goruData, sex: e.target.value })}
        />
        <Form.Check
          type="checkbox"
          label="Female"
          value="F"
          onChange={(e) => setgoruData({ ...goruData, sex: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Size</Form.Label>
        <Form.Check
          type="checkbox"
          label="Small"
          value="small"
          onChange={(e) => setgoruData({ ...goruData, size: e.target.value })}
        />
        <Form.Check
          type="checkbox"
          label="Medium"
          value="medium"
          onChange={(e) => setgoruData({ ...goruData, size: e.target.value })}
        />
        <Form.Check
          type="checkbox"
          label="Large"
          value="large"
          onChange={(e) => setgoruData({ ...goruData, size: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicText">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          value={goruData.price}
          onChange={(e) => setgoruData({ ...goruData, price: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id="exampleFormControlFile1"
          label="Add Image"
          formEncType="multipart/form-data"
          onChange={(e) => uploadImage(e)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={submitStatus}
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
