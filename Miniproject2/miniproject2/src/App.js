//  @TODO1 - Create basic routing app

import { Grid, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "./routes/routes";


const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Button onClick={() => navigate("/home")}>Home</Button>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => navigate("/army")}>Armies</Button>
        </Grid>
      </Grid>
      <AppRoutes />
    </div>
  );
};

export default App;