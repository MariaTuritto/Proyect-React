import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Style.css";

const Brief = () => {
  const { orderId } = useCartContext();

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
            <Button className="counterButton">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Brief;
