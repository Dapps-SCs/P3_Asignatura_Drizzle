import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <MatricularV1  drizzle={drizzle} drizzleState={drizzleState} />

const MatricularV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
//    <ContractData drizzle={drizzle} drizzleState={drizzleState}
//                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
//                  render={addr => {
//                      if (addr !== drizzleState.accounts[0]) {
//                          return <p>"NO SOY EL PROFE"</p>
//                      }
//                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
//                                           contract="Asignatura" method="califica"
//                                           labels={["Dirección Alumno", "Índice Evaluación",
//                                               "0=NP 1=Nota 2=MH", "Nota (x10)"]}
//                      />
//                  }}
    />
</article>

export default Matricular;