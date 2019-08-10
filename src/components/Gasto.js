import React from 'react';

const Gasto = ({gasto}) => {

    

    return (
        <li className="gasto">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">${gasto.cantidadGasto}</span>
                
            </p>
        </li>
    );
};

export default Gasto;