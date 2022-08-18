import "./app.css";
import { Typography } from "@mui/material";
import Topics from "../topics/topics";

const App = () => (
  <div className="app">
    <Typography variant="h4">Stargazers count by Topic name</Typography>
    <Typography variant="h7">
      Please select on a Topic to load related Topics
    </Typography>
    <Topics />
  </div>
);

export default App;
