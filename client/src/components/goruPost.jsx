import React, { useState, useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";

export default function GoruPost() {
  const [goruData, setGoruData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getGorus = async () => {
    const res = await fetch("http://localhost:3004/gorus");
    const gorus = await res.json();
    if (gorus) {
      setGoruData(gorus);
      setLoading(false);
    }
  };
  useEffect(() => {
    getGorus();
  }, []);

  return (
    <React.Fragment>
      {loading && <div>LOADING GORU</div>}
      <CardColumns>
        {goruData.map((goru) => (
          <Card key={goru._id} style={{ width: "25rem" }}>
            <Card.Img variant="top" src={goru.image} />
            <Card.Body>
              <Card.Title>{goru.cowBreed}</Card.Title>
              <Card.Text>Owner: {goru.ownerName}</Card.Text>
              <Card.Text>Price:{goru.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </React.Fragment>
  );
}
