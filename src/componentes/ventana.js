import React from 'react';
import "../css/sponker.css"

const Ventana = (props) => {

    const {usuario,usu,spinker}= props
    if (spinker) {

        return (
            <>
                <div className="ventana2">
                    <div class="sk-folding-cube">
                    <div class="sk-cube1 sk-cube"></div>
                    <div class="sk-cube2 sk-cube"></div>
                    <div class="sk-cube4 sk-cube"></div>
                    <div class="sk-cube3 sk-cube"></div>
                    </div>

                </div>
                
            </>
        )
        
    }else{

        return ( 
            <>
            <div className="ventana">
                <div>
                    <h3>El usuario fue creado</h3>
                    <p><strong>Datos del usuario creado: </strong></p>
                    <p><strong>Documento: </strong>{usuario.documento}</p>
                    <p><strong>Nombres y Apellidos: </strong>{usuario.nombre_apellido}</p>
                    <button onClick={(e) => usu(null)}>Cerrar</button>
                </div>
            </div>
            </>
         );

    }
    
}
 
export default Ventana;