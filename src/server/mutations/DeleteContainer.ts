import { gql } from "graphql-request";

const DeleteContainer = gql`
    mutation DeleteContainer($id: String!) {
        serviceDelete(id: $id)
    }
`

export default DeleteContainer
