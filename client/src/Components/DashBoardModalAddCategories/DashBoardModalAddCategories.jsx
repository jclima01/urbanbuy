import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  getCategories,
} from "../../redux/actions";

const DashBoardModalAddCategories = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;

  const [input, setInput] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    dispatch(addCategory(input, clientAdminStorage._id));

    setInput("");
  };
  useEffect(() => {
    dispatch(getCategories(clientAdminStorage._id));
  }, []);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Add Categories</Form.Label>
            <Form.Control
              type="email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ej. Phone"
              autoFocus
            />
            <Button
              style={{
                backgroundColor: "#ff7f2a",
                border: "none",
                marginTop: 10,
              }}
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Form.Group>
          <Form.Label>Set Categories</Form.Label>
          <div
            style={{
              width: "100%",
              height: 150,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              overflowY: "auto",
            }}
          >
            {categories?.map((item) => (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  padding: 10,
                  backgroundColor: "#fff",
                  color: "black",
                  margin: 5,
                  borderRadius: 10,
                }}
                key={item._id}
              >
                {" "}
                {item.categoryName}
                <button
                  style={{
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ada9a9",
                    border: "none",
                    padding: 3,
                    borderRadius: 5,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteCategory(item._id));
                  }}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DashBoardModalAddCategories;
