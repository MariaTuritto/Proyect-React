import { useState } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const sendOrder = () => {
  const { cartList } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");


  

    
  const order = {
    buyer: {
      userName,
      userEmail,
      userPhone,
    },

 
    date: serverTimestamp(),
    
  };


  const handleSubmit = (e) => {

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    e.preventDefault();

    if (userName === "" || userEmail === "" || userPhone === "") {
      alert("No debes dejar campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
  };

  const noLetras = (e) => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letras.includes(e.key) ? e.preventDefault() : console.log(e.key);
  };

  

  return (
    <>
      <div className="orderPurchase">
        <h3 className="titlesCards">Para Confirmar enviar los siguientes datos:</h3>
      </div>
      <div className="containerForm">
        <Form onSubmit={handleSubmit} className="formContainer">
          <Form.Group className="mb-3">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Text className="text-muted">
              Ingrese Nombre y Apellido
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Numero de Telefono</Form.Label>
            <Form.Control
              onChange={(e) => setUserPhone(e.target.value)}
              onKeyDown={noLetras}
            />
            <Form.Text className="text-muted">
              Ingrese su numero de contacto
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="email@algo.com"
            />
            <Form.Text className="text-muted">
              No compartiremos nunca esta informacion
            </Form.Text>
          </Form.Group>
          <div className="buttonsCart my-4">
          <Button onClick={() => {
            enviarData(cartList)
          }} variant="outline-warning" type="submit">
            FINALIZAR COMPRA
          </Button>
          
            <Button variant="outline-warning" type="reset">
              {" "}
              LIMPIAR INFO{" "}
            </Button>
          </div>
        </Form>
        <div className="orderId">
          <div className="orderImage2">
            <span>
              {" "}
              Cod.Orden :<strong>{orderId}</strong>
            </span>
            <Link className="link" to={"/Brief"}>
              <Button variant="outline-warning" type="submit">
                VERIFICA TU COMPRA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default sendOrder;
