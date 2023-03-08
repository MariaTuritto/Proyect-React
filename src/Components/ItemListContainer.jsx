import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();
 
 useEffect(()=>{
  const db = getFirestore();
  const itemsCollection = collection(db, 'data');

  getDocs(itemsCollection).then ((QuerySnapshot) => {
    const products = QuerySnapshot.docs.map((doc) => ({
     ...doc.data(),
     id: doc.id, 
    }));
    setProducts(products)
  });

}, []);

const resFilter = products.filter((product) => product.category === category);

  return (
    <>
     <div>
       <h1 className='titleProducts'>Productos</h1>
    </div>
    {category ? <ItemList products = {resFilter}/> : <ItemList products= {products}/>}
    </>
  )

};

export default ItemListContainer;