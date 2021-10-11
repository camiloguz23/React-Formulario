import React,{useState} from 'react';
 
const Formualrio  = (props) => {

    const {docu,nuevaDocu,nombre,nuevoNombre,contra_vacia,contra_full,usu,cargando} = props

    const [error,recibir] = useState(false)

    function validarContra(e) {
        contra_full(e.target.value)  
    }

    function validarNombre(e) {
        nuevoNombre(e.target.value)
    }

    const guardarDatos = (e) => {
        e.preventDefault()

        if (docu === 0 || nombre === "" || contra_vacia === "" ) {
            console.log("datos incompletos")
            recibir(true)
            return 
        } else {
            const dato ={
                documento:docu,
                nombre_apellido: nombre,
                contrasena: contra_full
            }
            usu(dato)
            recibir(false)
            cargando(true)

            setTimeout(() => {
                cargando(false)
            }, 5000);
        }
    }

    
    return ( 
        <>
        <form onSubmit={guardarDatos} className="formulario">
            <legend>Datos Personales</legend>
            <fieldset>
                <label>Documento</label><br></br>
                <input type="number" name="documento" onChange={ e => nuevaDocu(parseInt(e.target.value))}></input><br></br>
                <label>Nombre y Apellidos</label><br></br>
                <input type="text" onChange={validarNombre}></input><br></br>
                <label>Contraseña</label><br></br>
                <input type="password" onChange={validarContra}></input><br></br>
                
                <button type="submit">Enviar datos</button>
            </fieldset>

            {(error) ? <p className="mensaje_error">datos incompletos</p> : null}
        </form>

        </>
     );
}
 
export default Formualrio ;