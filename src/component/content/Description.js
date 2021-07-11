import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Description = ({ location, match, history }) => {
  const [movie, setMovie] = useState(location.state);
  console.log("desc", movie.title);

  return (
    <Card style={{ width: "35%" , margin:"3% 30%"}}>
      <Card.Body>
      <img src={movie.url} alt="note existe" width="60%"/>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.desc}</Card.Text>
        <Card.Link onClick={() => history.goBack()}>Go back</Card.Link>
        <Card.Link href={movie.link} target="_blank">Go to the movie</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Description;
