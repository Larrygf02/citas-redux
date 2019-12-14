import React from 'react'
import { borrarCitaAction } from '../actions/CitasActions'
import { useDispatch, useSelector } from 'react-redux'

const ListadoCitas = () => {
    // obtener las citas del state
    const citas = useSelector(state => state.citas)

    // Dispatch para eliminar
    const dispatch = useDispatch()
    const borrarCita = id => dispatch(borrarCitaAction(id))

    //Ver si hay citas
    const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas' : 'Administra las Citas aquí'
    return (
        <div className="card mt-5">
            <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">
                    {citas.citas.map(cita => (
                        <div key={cita.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{cita.mascota}</h3>
                                <p className="card-text"><span>Nombre Dueño: {cita.propietario}</span></p>
                                <p className="card-text"><span>Fecha: {cita.fecha}</span></p>
                                <p className="card-text"><span>Hora: {cita.hora}</span>  </p>
                                <p className="card-text"><span>Sintomas: {cita.sintomas}</span> <br /> </p>
                                <button 
                                    className="btn btn-danger" onClick={() => borrarCita(cita.id)}>Borrar &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListadoCitas;