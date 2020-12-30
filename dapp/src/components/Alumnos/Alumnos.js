import {newContextComponents} from "@drizzle/react-components";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";
// import Matricular from "./Matricular";

const {ContractData} = newContextComponents;

const Alumnos = (props) => (
    <section className="AppAlumnos">
        <h2>Alumnos</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => (
                <table>
                    <AlumnosHead/>
                    <AlumnosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 matriculasLength={ml}/>
                </table>
            )}
        />

        <button key="submit" type="button"> Matricular </button>

    </section>
);

export default Alumnos;
