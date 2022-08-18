import React, { useState } from "react";
import { Grid } from "@mui/material";
import Topic from "./topic";
import "./topics.css";

const Topics = () => {
  const [selectedTopics, setSelectedTopics] = useState(["react"]);

  const handleSelection = (name) => {
    setSelectedTopics([...selectedTopics, name]);
  };

  return (
    <Grid container>
      {selectedTopics.map((name, index) => (
        <Grid item lg={3} key={`${name}-${index}`}>
          <Topic name={name} handleSelection={handleSelection} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Topics;
