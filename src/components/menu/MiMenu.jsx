import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { eliminarPlatos, precioTotalResta, listoEnResta, healthScoreResta } from '../../redux/action/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../index.css'

const MiMenu = ({ id, title, image, healthScore, readyInMinutes, pricePerServing, plato }) => {

  const dispatch = useDispatch()

  return (
      <div className="d-flex justify-content-center mt-2 m-4">
        <Card style={{ width: '24rem', height: '32rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="d-flex flex-column">
                <Card.Title style={{fontSize:"25px", fontWeight:600}}>{title}</Card.Title>
                <h3>
                  ${pricePerServing}
                </h3>
                <h6>
                  Ready in {readyInMinutes} minutes
                </h6>
              </div>
              <div className="d-flex justify-content-around">
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(eliminarPlatos(plato.id))
                    dispatch(precioTotalResta(pricePerServing))
                    dispatch(listoEnResta(readyInMinutes))
                    dispatch(healthScoreResta(healthScore))
                  }}
                >
                  Eliminar
                </Button>
                <Link
                  to={`/description/${id}`}
                  style={{ textDecoration: "none" }}
                  id={id}
                  title={title}
                  image={image}
                  healthScore={healthScore}
                >
                  <Button
                    variant="primary"
                  >
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
  )
}

export default MiMenu