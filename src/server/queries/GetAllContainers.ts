import { gql } from "graphql-request";
import ProcessEnv from "../ProcessEnv";

const GetAllContainers = gql`
  query GetAllContainers {
    project(id: "${ProcessEnv.getVariable("CONTAINER_PROJECT_ID")}") {
      services(first: ${ProcessEnv.getVariable("TRIAL_ACCOUNT_SERVICE_LIMIT")}) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`

export default GetAllContainers;