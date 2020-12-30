import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <MatricularV1  drizzle={drizzle} drizzleState={drizzleState} />

const MatricularV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
              contract={"Asignatura"} method={"estaMatriculado"} methodArgs={[]}
              render={bool => {
                  if (bool == true) {
                      return <p>"El alumno ya está matriculado"</p>
                  }
                  return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                       contract="Asignatura" method="automatricula"
                                       labels={["Nombre Alumno", "Email Alumno"]}
                  />
              }}
    />
    </article>

export default Matricular;