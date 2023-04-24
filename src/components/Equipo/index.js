import "./equipo.css";
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo,id } = props.datos;

  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.7),
  };
  const styleTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            className="input-color"
            type="color"
            value={hexToRgba(colorPrimario, 0.7)}
            onChange={(event) => {
              actualizarColor(event.target.value, id);
            }}
          ></input>
          <h3 style={styleTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, i) => (
              <Colaborador
                datos={colaborador}
                key={i}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like = {like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
