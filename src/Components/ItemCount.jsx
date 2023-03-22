import { useState} from "react";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../Context/CartContext";
import '../Style.css';

const ItemCount = ({stock, price, id, title}) => {

    const {cartList, setCartList} = useCartContext();

    const [counter, setCounter] = useState(0);

    const increase = () => {
      if(counter < stock) {
        setCounter(counter + 1);
      }
    };

    const decrease = () => {
      if (counter > 0) 
        setCounter(counter - 1);
    }
  
      
    // funcionalidad para agregar un producto al carrito
    const addToCart = () => {
      setCartList((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item)=> {
            if (item.id === id){
              return {...item, quantity : item.quantity + counter };
            } else{
              return item;
            }
          });
        } else {
          return [...currItems, {id, quantity: counter, price, title}];
        }
      });
    };
  
    return (
    
      <div className="buttonsCount" >
        { counter === 0 ? (<button className="counterButton" onClick={decrease}  >
           -
        </button > ) : (<button className="counterButton" onClick={decrease}  >
           -
        </button > )}
           
        <div>

          <Button onClick={() => addToCart()} variant="outline-warning">
              Agregar al carrito : {counter}
          </Button>
        </div>
        { counter === stock ? (<button className="counterButton" onClick={increase}  >
           +
        </button > ) : (<button className="counterButton" onClick={increase}  >
           +
        </button > )}

         
      </div>
      
      
    );
  };
  
  export default ItemCount;