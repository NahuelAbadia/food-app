import React from 'react'
import { Button, Modal, Container, Row, Col, Form, Stack } from 'react-bootstrap';
import { RiInformationLine } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { GiHealthNormal } from 'react-icons/gi';

function PopUp({ show, handleClose, title, precio, image, healthscore, readyInMinutes, vegan, sourceUrl }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="px-3">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="mb-2 p-0">
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={image}
                  alt={title}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row>
              <h2 className="text-center fs-1 fw-bold pt-3">${precio}</h2>
            </Row>
          </Container>

          <Form>
            <div className="d-flex justify-content-center">
              <div className="d-flex justify-space-between aling-center text-center">

                <Form.Group className="mx-3 my-3">
                  <h4><BiTimeFive />{readyInMinutes} min</h4>
                </Form.Group>

                <Form.Group className="mx-3 my-3">
                  <h4><GiHealthNormal /> {healthscore}</h4>
                </Form.Group>
                <Form.Group className="mx-3 my-3">
                  {vegan ? <h4><b>Vegano: Si</b></h4> : <h4><b>Vegano: No</b></h4>}
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Stack gap={2}>
                <a href={sourceUrl} target="_blank" rel='noreferrer' className="btn btn-dark mt-2">Mas información <RiInformationLine /></a>
              </Stack>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;