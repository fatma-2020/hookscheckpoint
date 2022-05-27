import { Dropdown } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

import "./AddMovie.css";

const AddMovie = ({ addFilm }) => {
  const [descrition, setDescrition] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [poster, setPoster] = React.useState("");
  const addMovie = () => {
    if (
      title.trim() === "" ||
      poster.trim() === "" ||
      descrition.trim() === "" ||
      rating === 0
    ) {
      window.alert("رجاء  تاكد من ادخال جميع المعلومات !");
      console.log(title, poster, descrition, rating);
    } else {
      console.log(rating);
      addFilm(title, poster, descrition, rating);
      handleClose();
    }
  };
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-button" variant="primary" onClick={handleShow}>
        إضافة فيلم جديد +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>إضافة فيلم جديد</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>اسم الفيلم</Form.Label>
              <Form.Control
                type="text"
                placeholder=" .. اسم الفيلم"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>قصة الفيلم</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="... يدور الفيلم حول"
                onChange={(e) => setDescrition(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>غلاف الفيلم</Form.Label>
              <Form.Control
                type="text"
                placeholder="رابط للصورة الدعائية"
                onChange={(e) => setPoster(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>تصنيف الفيلم </Form.Label>
              <Form.Control
                type="number"
                placeholder="  كم نجمة ؟"
                min={1}
                max={5}
                required
                style={{ width: "150px" }}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={addMovie}>
            حفظ المعلومات
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddMovie;
