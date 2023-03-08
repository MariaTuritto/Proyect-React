import { useParams} from "react-router-dom";
import '../Style.css';

const Brief = () => {
  const {id} = useParams();

  return (
    <>

<div className="orderSection">
        <div className="orderImage">
          <h2 className="imageText--2"> Gracias por tu Compra!
          RECUERDA GUARDAR TU COD.  <strong>{id}</strong> </h2>
        </div>
      </div>
   
    
    </>
   
  );
}

export default Brief;