import { gql } from "@apollo/client";

export const TOPIC_QUERY = gql`
  query getTopics($name: String!) {
    topic(name: $name) {
      name
      relatedTopics {
        name
        stargazerCount
      }
      stargazerCount
    }
  }
`;
