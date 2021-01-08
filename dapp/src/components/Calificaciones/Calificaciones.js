import {newContextComponents} from "@drizzle/react-components";

import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import Calificar from "./Calificar";
import ObtenerLista from "./ObtenerLista";



const {ContractData} = newContextComponents;

const Calificaciones = (props) => (
    <section className="AppCalificaciones">
        <h2>Calificaciones</h2>

        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"matriculasLength"}
                      render={ml => <ContractData
                          drizzle={props.drizzle}
                          drizzleState={props.drizzleState}
                          contract={"Asignatura"}
                          method={"evaluacionesLength"}
                          render={el => <table>
                              <CalificacionesHead evaluacionesLength={el}/>
                              <CalificacionesBody drizzle={props.drizzle}
                                                  drizzleState={props.drizzleState}
                                                  matriculasLength={ml}
                                                  evaluacionesLength={el}/>
                          </table>}

                          />}

        />

        <h2> Listado de notas de la evaluacion</h2>

        <ObtenerLista drizzle={props.drizzle}
                      drizzleState={props.drizzleState} />

        <Calificar drizzle={props.drizzle}
                   drizzleState={props.drizzleState} />


    </section>
);

export default Calificaciones;
