import { gql } from "graphql-request";

const GetAllContainers = gql`
  query GetAllContainers {
    project(id: "${process.env.CONTAINER_PROJECT_ID}") {
      services(first: ${process.env.TRIAL_ACCOUNT_SERVICE_LIMIT}) {
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