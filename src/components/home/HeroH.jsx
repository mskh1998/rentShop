import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import Row from "react-bootstrap/Row";

import JSA from "../../Jsons/AboutModal.json";

import Modal from "../modals/Modal";

import "aos/dist/aos.css";

const catchData = async e => {
  let modalData = await JSA.find(a => a.id === e.target.getAttribute("id"));
  return modalData;
};

function HeroH() {
  const [modalShow, setModalShow] = useState({ show: false, data: undefined });

  const handleClick = async e => {
    let modalData = await catchData(e);
    if (modalData) {
      setModalShow({ show: true, data: modalData });
    } else {
      setModalShow({ show: false });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="heroh pb-5" id="Fh">
        <div className="container test">
          <div className="row">
            <Col lg={7} sm={5} xs={5}>
              <Container className="HeroR">
                <Row className="textStyle">
                  <Col className="divHero" lg={12}>
                    <img className="imgHero" src="images/Hoorsa.png" alt="" />
                  </Col>
                  <Col className="divHeroo" lg={12} onClick={handleClick}>
                    <img
                      id="501"
                      className="imgHerooo"
                      src="images/Hoorpay Core.png"
                      alt=""
                    />
                  </Col>
                  <Col className="divHero" lg={12}>
                    <img
                      className="imgHeroo"
                      src="images/Smart Processors1.png"
                      alt=""
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="divFull" lg={5} sm={5} xs={5}>
              <img className="Fulli" src="images/Full Screen2.png" alt="" />
            </Col>
          </div>
        </div>
      </div>
      <Modal
        label={modalShow.data?.label}
        show={modalShow.show}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default HeroH;
