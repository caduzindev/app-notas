import {
    ApolloClient,
    ApolloLink,
    concat,
    HttpLink,
    InMemoryCache,
    Operation,
} from "@apollo/client";

const httpLink = new HttpLink({uri:"http://192.168.1.105:4000/"})

const authMiddleware = new ApolloLink((operation:Operation,forward:any)=>{
    operation.setContext(({headers={}})=>({
        headers:{
            ...headers,
            authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiNzFhMzVmLTUyOTgtNDIzMC04NTU2LTVjMjFlMDY5ZjJkYSIsImlhdCI6MTYzMzE5NTI5OH0.XADUC0MD6EZXVrVAwkuKuXatFwr7ilpSqTK09mCnJ94'
        }
    }))

    return forward(operation)
})


const client = new ApolloClient({
    link:concat(authMiddleware,httpLink),
    cache:new InMemoryCache()
})

export default client