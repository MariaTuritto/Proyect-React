import { Link } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../Context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Style.css";

const Cart = () => {

  const { cartList, removeList ,deleteItem, totalPrice} = useCartContext();

 
  const handledClick = () => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
};

  // Condicional para mostrar mensaje NO ITEMS si aun no has agregado Items al Cart

  if (cartList.length === 0) {
    return (
      <div className="itemsNo">
        <h2 className="titleProducts">NO HAY ITEMS EN TU CARRITO</h2>

        <Link className="link" to={"/catalogue"}>
          <Button className="FormButton">Volver al Catalogo</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="cardDetail">
          <h3 className="titlesCards">Carrito</h3>
       
        {cartList.map((product) => {
          return (
            <div key={product.id} className="cardCart">
              <Card style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Precio: $ {product.price}
                  </Card.Text>
                  <Card.Text>Cantidad: {product.quantity}</Card.Text>
                  <Card.Text>
                    Sub-total: $ {product.price * product.quantity}
                  </Card.Text>
                </Card.Body>
                <Button
                  variant="warning"
                  onClick={() => deleteItem(product.id)}
                >
              
                  <span className="material-symbols-outlined">delete</span>
                </Button>
              </Card>
             
            </div>
          );
        })}
       

        <Card.Text>Total: $ {totalPrice()}</Card.Text>
        <div className="buttonsCart">
       
           <Link to={"/catalogue"}>
                <span className="link">
                  <Button variant="warning">Continuar Comprando</Button>
                </span>
              </Link>
              <Link  to={"/SendOrder"}>
             
              <span className="link">
              <Button variant="warning" onClick={() => removeList()}>
            Confirmar Compra
            </Button>
            </span>
          </Link>
       
        </div>
        </div>
      </>
    );
  }
};

export default Cart;
