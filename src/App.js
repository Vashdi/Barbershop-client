import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Price from "./Components/Price";
import { useEffect, useState } from "react";
import Shop from "./Components/Shop";
import Appointment from "./Components/Appointment";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const storeData = useSelector((state) => state);
  const [logged, setLogged] = useState(false);
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (storeData.AuthReducer.user) {
      const pop_status = localStorage.getItem("modal_status");
      if (!pop_status) {
        setOpenModal(true);
      }
    } else {
      localStorage.removeItem("modal_status");
    }
    setLogged(storeData.AuthReducer.user ? true : false);
  }, [storeData.AuthReducer.user]);

  const closeModal = () => {
    localStorage.setItem("modal_status", 1);
    setOpenModal(false);
  };

  return (
    <div className="App">
      <Header />
      <About />
      {logged ? <Appointment /> : null}
      <Gallery />
      <Price />
      <Shop />
      <Contact />
      <Footer />
      <div>
        <button type="button">react-transition-group</button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title" style={{ textAlign: "center" }}>
                התראה לגבי אי הגעה לתורים
              </h2>
              <p
                id="transition-modal-description"
                style={{ textAlign: "center" }}
              >
                ,לקוחות יקרים <br />
                לקוח אשר לא יגיע לתור שקבע ללא ביטולו יחוייב בתשלום התספורת
              </p>
              <div
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={closeModal}
              >
                סגור
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default App;
