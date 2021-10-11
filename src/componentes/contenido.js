import React from 'react';
import logo from "../img/logo.png";

const Contenido = () => {
    return ( 
        <>
        <div className="cuerpo_contenido">
            <img className="imagen" src ={logo} alt="persona registrando usuario"/>
           {/*  <h3>Informacion del formulario</h3>
            <div className="contenedor">
                <p>Validacion de datos</p>
            </div>
            <div className="contenedor">
                <p>Registro en la plataforma</p>
            </div>
            <div className="contenedor">
                <p>Facil de llenar el formulario</p>
            </div> */}
        </div>
        </>
     );
}
 
export default Contenido;