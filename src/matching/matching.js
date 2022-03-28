import { API, Amplify } from "aws-amplify";
import config from "../../aws-exports";
import * as queries from "../graphql/queries";

Amplify.configure(config);

export async function getDeparting(){
    let filter = {
        departing: {
            eq: "true" //equals true
        }
    };
    const departers = await API.graphql({
        query: queries.listUsers,
        variables: {filter: filter}
      });

    return departers;
}

