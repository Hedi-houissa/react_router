import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

const AddMovie = ({ addItem }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [link, setLink] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const descChange = (e) => {
    setDesc(e.target.value);
  };
  const urlChange = (e) => {
    setUrl(e.target.value);
  };
  const ratingChange = (e) => {
    setRating(e.target.value);
  };
  const linkChange = (e) => {
    setLink(e.target.value);
  };

  const addmovie = () => {
    // console.log('items ',title,desc,url,rating);
    addItem(title, desc, url, rating);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="add title ....."
              onChange={titleChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="add URL image ....."
              onChange={urlChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="add description ....."
              onChange={descChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="add link to the movie"
              onChange={linkChange}
            />
            <Form.Control
              type="text"
              placeholder="add rating between 1 and 5 ....."
              onChange={ratingChange}
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
