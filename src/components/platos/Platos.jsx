import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { agregarPlatos, precioTotalSuma, listoEnSuma, healthScoreSuma } from '../../redux/action/action';
import '../../index.css'

const Platos = ({ id, title, image, healthScore, readyInMinutes, pricePerServing, plato }) => {

  const dispatch = useDispatch()
  //Me traigo state de carrito
  const carritoRedux = useSelector(state => state.carrito)
  //Alert
  const Swal = require('sweetalert2')

  const validaciones = () => {
    let vegano = carritoRedux.filter((item) => item.vegan === true)
    let normal = carritoRedux.filter((item) => item.vegan === false)
    console.log(vegano)
    if (carritoRedux.length < 4) {
      if (plato.vegan === true && vegano.length < 2) {
        window.scrollTo(0, 0)
        dispatch(agregarPlatos(plato))
        dispatch(precioTotalSuma(pricePerServing))
        dispatch(listoEnSuma(readyInMinutes))
        dispatch(healthScoreSuma(healthScore))
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
        dispatch(healthScoreSuma(healthScore))
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

  return (
    <div className="d-flex justify-content-center m-4">
      <Card style={{ width: '24rem', height: '32rem', }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column">
              <Card.Title style={{fontSize:"25px", fontWeight:600}}>{title}</Card.Title>
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
    </div >
  )
}

export default Platos;