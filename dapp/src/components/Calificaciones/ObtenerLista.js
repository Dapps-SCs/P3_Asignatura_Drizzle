import {useState} from "react"
import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const ObtenerLista = (props) => {


    let [listaEvaluaciones, setEvaluaciones] = useState(0);

    const option = evaluacionesIndex => (

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract="Asignatura"
            method={"evaluaciones"}
            methodArgs={[evaluacionesIndex]}
            render={evi => (
                <option key={evaluacionesIndex}> {evi.nombre}</option>
            )}
        />
    );

    const dropdown = (
        <select onChange={event => setEvaluaciones(event.target.selectedIndex)}>
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract="Asignatura"
                method="evaluacionesLength"
                render={el => Array.from({length: el}, (_, evaluacionIndex) => option(evaluacionIndex))}
            />
        </select>
    )
    const titulo = evaluacionIndexTitulo =>(
        <h2> Listado de notas de la evaluacion: E<sub>{evaluacionIndexTitulo}</sub> </h2>
    )
    const row = (alumnoIndex, evaluacionIndexRow) => (
        <tr>
            <th>A<sub>{alumnoIndex}</sub></th>

            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract="Asignatura"
                method="matriculas"
                methodArgs={[alumnoIndex]}
                render={alumnoAddr => (
                    <>
                        <ContractData
                            drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            contract="Asignatura"
                            method="datosAlumno"
                            methodArgs={[alumnoAddr]}
                            render={datos => (<td>{datos.nombre}</td>)}
                        />
                        <ContractData
                            drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            contract="Asignatura"
                            method="calificaciones"
                            methodArgs={[alumnoAddr, evaluacionIndexRow]}
                            render={nota => (
                                <td key={"CalificacionesEvaluacion" + alumnoAddr + "-" + evaluacionIndexRow}>
                                    {nota.tipo === "0" && "N.P."}
                                    {nota.tipo === "1" && nota.calificacion / 10}
                                    {nota.tipo === "2" && (nota.calificacion / 10) + "(M.H.)"}
                                </td>
                            )}
                        />
                    </>
                )}
            />
        </tr>
    );


    const table = evaluacionIndexTable => (

        <table>
            <thead>
            <th>#</th>
            <th>Nombre del Alumno</th>
            <th>Calificacion del Alumno</th>
            </thead>
            <tbody>
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract="Asignatura"
                method="matriculasLength"
                render={ml => Array.from({length: ml}, (_, alumnoIndex) => row(alumnoIndex, evaluacionIndexTable))}
            />
            </tbody>
        </table>
    );

    return (
        <>
            {titulo(listaEvaluaciones)}
            {dropdown}
            {table(listaEvaluaciones)}
        </>
    )
};

export default ObtenerLista;