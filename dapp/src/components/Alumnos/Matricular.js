import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <MatricularV1  drizzle={drizzle} drizzleState={drizzleState} />

const MatricularV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
</article>

export default Matricular;