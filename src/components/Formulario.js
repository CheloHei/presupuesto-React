import React,{useState} from 'react';

import Error from './Error'

import shortid from 'shortid';

const Formulario = (props) => {

    const {setGasto,setCrearGasto} = props;

    const [nombreGasto,setNombreGasto] = useState('');

    const [cantidadGasto,setCantidadGasto] = useState(0);

    const [error,setError] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();

        if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto==='') {
            setError(true);
            return
        }

        //pasar el gasto al compon princ

        //construir objeto 
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id:shortid.generate()
        }
        //pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        //eliminar alerta
        setError(false);

        //resetear el form
        setNombreGasto('');
        setCantidadGasto('');
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos Aqui</h2>
            {error ? <Error msj='Ambos campos son obligatorios o presupuesto incorrecto'/> : null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej.Comida"
                    onChange={e=>setNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
            
                <label htmlFor="">Cantidad Gasto</label>
                <input type="number"
                    className="u-full-width"
                    placeholder="Ej.300"
                    onChange={e=>setCantidadGasto(parseInt(e.target.value,10))}
                    value={cantidadGasto}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="agregar gasto"/>
        </form>
    );
};

export default Formulario;