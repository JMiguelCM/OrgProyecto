import "./listaOpciones.css"

const ListaOpciones = (props) =>{
    // metodo map -> arreglo.map((equipo, index)) =>{
    //return <option></option>
    //})
    
    
    const manejarCambio = (event) => {
        console.log("cambio", event.target.value)
        props.actualizarEquipo(event.target.value)
    }

    return <div className="listaOpciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo,i)=> <option key={i} value= {equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones