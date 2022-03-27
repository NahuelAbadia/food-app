import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { agregarPlatos, precioTotalSuma, listoEnSuma, healthScoreSuma } from '../../redux/action/action';
import PopUp from '../PopUp';
import '../../index.css'

const Platos = ({ id, title, image, healthscore, readyInMinutes, pricePerServing, plato, vegan }) => {

  const dispatch = useDispatch()
  //Me traigo state de carrito
  const carritoRedux = useSelector(state => state.carrito)
  //Alert
  const Swal = require('sweetalert2')

  const validaciones = () => {
    let vegano = carritoRedux.filter((item) => item.vegan === true)
    let normal = carritoRedux.filter((item) => item.vegan === false)

    if (carritoRedux.length < 4) {
      if (plato.vegan === true && vegano.length < 2) {
        window.scrollTo(0, 0)
        dispatch(agregarPlatos(plato))
        dispatch(precioTotalSuma(pricePerServing))
        dispatch(listoEnSuma(readyInMinutes))
        dispatch(healthScoreSuma(healthscore))
      }
      else if (plato.vegan === true) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes agregar mas de 2 platos veganos',
        })
      }
      else if (plato.vegan === false && normal.length < 2) {
        window.scrollTo(0, 0)
        dispatch(agregarPlatos(plato))
        dispatch(precioTotalSuma(pricePerServing))
        dispatch(listoEnSuma(readyInMinutes))
        dispatch(healthScoreSuma(healthscore))
      }
      else if (plato.vegan === false) {
        Swal.fire({
          icon: 'error',
          title: 'No puedes agregar mas de 2 platos comunes',
        })
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'No puedes agregar mas de 4 platos',
      })
    }
  }

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="d-flex justify-content-center m-4">
      <Card style={{ width: '24rem', height: '32rem', }}>
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
            <div className="d-flex justify-content-between ">
              <Button
                onClick={validaciones}
                variant="primary"
              >
                Añadir
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
    </div >
  )
}

export default Platos;