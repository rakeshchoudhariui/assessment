import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TopicCard = ({ data = {}, handleSelection }) => {
  const { name, stargazerCount, relatedTopics } = data;

  return (
    <Card variant="outlined" className="card-container">
      <CardContent>
        {" "}
        <Typography variant="h5" gutterBottom data-testid="card-title">
          {name} - {stargazerCount}
        </Typography>
        <hr />
        <Typography variant="h6" gutterBottom>
          Related Topics:
        </Typography>
        <ul className="card-related-topics">
          {relatedTopics?.map(({ name, stargazerCount }, index) => (
            <li
              key={`${name}-${index}`}
              className="related-topic"
              onClick={() => handleSelection(name)}
              data-testid="related-topic"
            >
              <Typography gutterBottom>
                {name} - {stargazerCount}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
