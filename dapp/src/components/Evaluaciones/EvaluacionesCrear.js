import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const EvaluacionesCrear = ({drizzle, drizzleState}) => <EvalV1  drizzle={drizzle} drizzleState={drizzleState} />


const EvalV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Crear Evaluación</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>"NO SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="creaEvaluacion"
                                           labels={["Nombre Evaluación", "Fecha Evaluación",
                                               "Puntos"]}
                      />
                  }}
    />
</article>

export default EvaluacionesCrear;