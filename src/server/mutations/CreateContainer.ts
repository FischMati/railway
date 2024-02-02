import { gql } from "graphql-request";

const CreateContainer = gql`
    mutation CreateContainer {
        serviceCreate(input: {projectId: "${process.env.CONTAINER_PROJECT_ID}"}) {
            id,
            name
        }
    }
`

export default CreateContainer
