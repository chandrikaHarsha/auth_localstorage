import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignInImg from "./SignInImg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  //   const [validated, setValidated] = useState([]);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  function inputData(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }
  function submitData(e) {
    e.preventDefault();
    const userData = localStorage.getItem("ValidInput");
    // console.log(userData);
    const { email, password } = input;
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 5) {
      alert("password is too short");
    } else {
      if (userData && userData.length) {
        const user = JSON.parse(userData);
        const userLogin = user.filter((items, index) => {
          return items.email === email && items.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid input...Try again");
        } else {
          alert("Login Successful...");
          history("/Dashboard");
          localStorage.setItem("user_login", JSON.stringify(userLogin));
        }
      }
    }
  }
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between mt-5">
          <div className="left_data col-lg-6 p-3">
            <h3 className="text-center mt-3 mb-3">Sign In</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={inputData}
                />
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
                className="col-lg-12 border border-0 mt-5"
                onClick={submitData}
              >
                Submit
              </Button>
            </Form>
          </div>
          <SignInImg />
        </section>
      </div>
    </>
  );
};
export default Login;
