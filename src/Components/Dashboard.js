import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const history = useNavigate();
  const [date, setDate] = useState([]);
  const todayDate = new Date().toISOString().slice(0, 10);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const BirthDay = () => {
    // alert("ok");
    const user = localStorage.getItem("user_login");
    console.log(user);
    if (user && user.length) {
      const userInput = JSON.parse(user);
      setDate(userInput);
      const WishBirthDay = date.map((el, k) => {
        return el.date === todayDate;
      });
      if (WishBirthDay) {
        setTimeout(() => {
          //   console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };
  useEffect(() => {
    BirthDay();
  }, []);
  const Logout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };
  return (
    <>
      <Button onClick={Logout}>Logout</Button>
      {date.length === 0 ? (
        ""
      ) : (
        <>
          {date[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{date[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish you a great day ahead!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            alert("Kick Start Your Day...")
          )}
        </>
      )}
    </>
  );
};
export default Dashboard;
