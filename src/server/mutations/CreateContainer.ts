import { gql } from "graphql-request";
import ProcessEnv from "../ProcessEnv";

const CreateContainer = gql`
    mutation CreateContainer {
        serviceCreate(input: {projectId: "${ProcessEnv.getVariable("CONTAINER_PROJECT_ID")}"}) {
            id,
            name
        }
    }
`

export default CreateContainer
