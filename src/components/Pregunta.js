import React,{Fragment,useState} from 'react';
import Error from './Error'
const Pregunta = (props) => {

    const {setPresupuesto,setPreguntaPresupuesto,setRestante} = props;

    const [cantidad,setCantidad] = useState(0);

    const [error,setError] = useState(false);


    const agregarPresupuesto = e =>{
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return
        }
        setError(false);
        setPresupuesto(cantidad);
        setPreguntaPresupuesto(false);
        setRestante(cantidad);

    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error msj='El presupuesto es obligatorio'/>:null}

            <form action=""
                onSubmit={agregarPresupuesto}
            >
            <input type="number" name="" id=""
                className="u-full-width"
                placeholder="Agrega tu Presupuesto"
                onChange={e=>setCantidad(parseInt(e.target.value,10))}
            />
            <input type="submit" value="Definir Presupuesto" className="button-primary u-full-width"/>
            </form>
        </Fragment>
        
    );
};

export default Pregunta;