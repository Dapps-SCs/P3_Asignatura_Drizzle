import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <MatricularV1  drizzle={drizzle} drizzleState={drizzleState} />

const MatricularV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
        contract={"Asignatura"} method={"profesor"} methodArgs={[]}
        render={addr => {
            if (addr == drizzleState.accounts[0]) {
                return <p>"NO SOY ALUMNO"</p>
            }
        return <ContractForm drizzle={drizzle}
                      drizzleState={drizzleState}
                      contract="Asignatura"
                      method="automatricula"
                      labels={["Nombre Alumno", "Email Alumno"]}
                />
       }}
     />
  </article>

export default Matricular;