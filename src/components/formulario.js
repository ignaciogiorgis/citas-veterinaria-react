import React, {Fragment, useState,} from 'react';
import uuid from 'uuid/v4';
import '../App.css';

function Formulario({crearCita}){
    const [cita, ActualizarCita] = useState({
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : '',
    })

    const [error, actualizarError] = useState(false);

    //definimos Actualizar state

    const actualizarState = e =>{
        ActualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

   const  {mascota, propietario, hora, fecha, sintomas} = cita;
    // cuando el usuario presiona el boton
    const submitCita = e =>{
        e.preventDefault();
       //validar
        if(mascota.trim() ===''|| propietario.trim() === ''|| fecha.trim() === ''|| hora.trim() === ''|| sintomas.trim()=== ''){
           actualizarError(true);
            return;
        }
        //eliminar el mensaje previo
        actualizarError(false);

       //asignar un id
       cita.id = uuid();
       
       //crear la cita 
       crearCita(cita) 

       //reiniciar el form
       ActualizarCita({
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : '',
       })
    }



    return(
        <Fragment>
             <h2>Crear Cita </h2>

             {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
             
             <form className="cont-form" onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Mascota dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button type="submit"
                className="u-full-width button-primary">
                  Agregrar cita  
                </button>


             </form>
        </Fragment>
    );


}

export default Formulario;