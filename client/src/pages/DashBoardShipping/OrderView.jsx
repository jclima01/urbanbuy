import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../redux/actions";

const OrderView = ({ setShow, show, orderSelected, clientId }) => {
  const dispatch = useDispatch();
  const { status } = orderSelected;

  const [newOrderUpdate, setNewOrderUpdate] = useState({
    status: status,
  });
  const handleChange = (e) => {
    setNewOrderUpdate({
      ...newOrderUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrder(orderSelected._id, newOrderUpdate.status, clientId));

    setShow(!show);
  };

  const handleClose = () => setShow(false);
  const estadosOrden = [
    "Pending",
    "In Progress",
    "In Transition",
    "Dispatched",
    "Cancelled",
    "Received",
    "Refund",
    "Proccess",
  ];

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status</Form.Label>
            <Form.Select autoFocus name="status" onChange={handleChange}>
              {estadosOrden.map((estado, index) => (
                <option value={estado} key={index} selected={status === estado}>
                  {estado}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name='adress'
                placeholder={adress}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group> */}
          <Button onClick={handleSubmit}>Saved change</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderView;
