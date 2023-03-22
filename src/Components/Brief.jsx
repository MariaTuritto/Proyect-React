
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Style.css";
import { useState } from "react";

const Brief = () => {

  const [orderId, setOrderId] = useState(null)
 

  return (
    <>
      <div className="orderSection">
        <div className="orderImage">
          <h2 className="imageText--2">
            {" "}
            Gracias por tu Compra! RECUERDA GUARDAR TU COD.
            <strong>{orderId}</strong>{" "}
          </h2>
          <Link className="link" to={"/"}>
            <Button variant="outline-warning" className="counterButton">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Brief;
