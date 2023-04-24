import "./miOrg.css"

const MiOrg = (props) => {
    // Estado - Hooks
    //const [nVariable, funcionActualiza] = useState(valorInicial)
    
    // const [mostrar, actualizarMostar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostar(!mostrar)
    // }
    
    return <section className="orgSection">
        <h3 className="titulo">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg