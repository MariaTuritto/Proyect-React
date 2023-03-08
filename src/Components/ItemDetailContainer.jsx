import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
  
  const [data, setData] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'data');
      getDocs (itemsCollection).then((QuerySnapshot) => {
        const products = QuerySnapshot.docs.map((doc) => ({...doc.data(),
        id: doc.id,
      }));
      setData(products)
      });
    }, [])


    return (
      
      <ItemDetail products = {data}/>

    )
    
    
    
  };
  
  export default ItemDetailContainer;