import React from "react";
import { useQuery } from "@apollo/client";
import TopicCard from "./topicCard";
import { TOPIC_QUERY } from "./queries";

const Topic = ({ name, handleSelection }) => {
  const { data } = useQuery(TOPIC_QUERY, {
    variables: { name },
  });

  let content = null;

  if (data) {
    content = (
      <TopicCard data={data?.topic} handleSelection={handleSelection} />
    );
  }

  return content;
};

export default Topic;
