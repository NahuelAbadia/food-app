import React, { useState } from 'react';
import PopUp from "../PopUp"
import { Card, Button } from 'react-bootstrap';
import { eliminarPlatos, precioTotalResta, listoEnResta, healthScoreResta } from '../../redux/action/action';
import { useDispatch } from 'react-redux';
import '../../index.css'

const MiMenu = ({ id, title, image, healthscore, readyInMinutes, pricePerServing, plato, vegan }) => {

  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="d-flex justify-content-center mt-2 m-4">
      <Card style={{ width: '24rem', height: '32.5rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column">
              <Card.Title style={{ fontSize: "25px", fontWeight: 600 }}>{title}</Card.Title>
              <h3>
                ${pricePerServing}
              </h3>
              <h6>
                Listo en {readyInMinutes} minutos
              </h6>
            </div>
            <div className="d-flex justify-content-around">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(eliminarPlatos(plato.id))
                  dispatch(precioTotalResta(pricePerServing))
                  dispatch(listoEnResta(readyInMinutes))
                  dispatch(healthScoreResta(healthscore))
                }}
              >
                Eliminar
              </Button>
              <Button
                variant="primary"
                onClick={handleShow}
              >
                Ver detalles
              </Button>
              <PopUp
                show={show}
                handleClose={handleClose}
                id={id}
                title={title}
                precio={pricePerServing}
                image={image}
                healthscore={healthscore}
                readyInMinutes={readyInMinutes}
                vegan={vegan}
                sourceUrl={plato.sourceUrl}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MiMenu