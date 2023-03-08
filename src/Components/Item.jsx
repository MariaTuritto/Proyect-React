import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Style.css";

const Item = (props) => {
  return (
    <>
      <div key={props.id}>
        <div className="ContenedorCard">
          <div className="card">
            <div className="card-img">
              <img src={props.img} alt={props.title} />
            </div>
            <div className="card-detail">
              <h3>{props.title}</h3>

              <p>Precio: $ {props.price}</p>

              <span>Categoria: {props.category}</span>
            </div>
            <Button variant="outline-warning">
              {" "}
              <Link className="link" to={`/item/${props.id}`}>
                Detalles
              </Link>
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
