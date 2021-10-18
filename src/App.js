
import React, { useState } from 'react';


import './App.css';
import Header from './componentes/header';
import Formualrio from './componentes/form';
import Contenido from './componentes/contenido';
import Ventana from './componentes/ventana';


function App() {
  const [docu,nuevaDocu] = useState(0)
  const [nombre,nuevoNombre] = useState("")
  const [contra_vacia,contra_full] = useState("")
  const [usuario,usu] = useState(null)
  const [spinker,cargando] = useState(false)


  return (
    <>
      <Header titulo ="Formulario "/>
    
      <div className="cuerpo">
        <Formualrio docu ={docu} nuevaDocu={nuevaDocu}
          nombre={nombre} nuevoNombre={nuevoNombre}
          contra_vacia={contra_vacia} contra_full={contra_full}   
          usuario= {usuario} usu = {usu}
          cargando= {cargando}


        />

       
      </div>

      {(usuario == null)? null: <Ventana usuario = {usuario} usu={usu} spinker={spinker} cargando={cargando}/> }

     
      

    </>
  );
}

export default App;
