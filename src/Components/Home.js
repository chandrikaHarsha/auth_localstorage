import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignInImg from "./SignInImg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [validated, setValidated] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  function inputData(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }
  function submitData(e) {
    e.preventDefault();
    const { name, email, date, password } = input;
    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 5) {
      alert("password is too short");
    } else {
      console.log("data added successfully");
      localStorage.setItem("ValidInput", JSON.stringify([...validated, input]));
    }
  }
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between mt-3">
          <div className="left_data col-lg-6 p-3">
            <h3 className="text-center mt-3 mb-3">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={inputData}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={inputData}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDate">
                <Form.Control type="Date" name="date" onChange={inputData} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={inputData}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: "rgb(67,185,127)" }}
                className="col-lg-12 border border-0"
                onClick={submitData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have An Account?{" "}
              <span>
                <NavLink to="/Login">Sign In</NavLink>
              </span>
            </p>
          </div>
          <SignInImg />
        </section>
      </div>
    </>
  );
};
export default Home;
