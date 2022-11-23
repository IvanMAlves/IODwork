import React from "react";
//import { Grid, Button } from "@mui/material";
//import { useNavigate } from "react-router-dom";
//import { AppRoutes } from "./routes/routes";
import ButtonAppBar from "./components/ButtonBar";
//import Background from "./img/Background.jpg"

const App = () => {
  //const navigate = useNavigate();

  return (
    
    <div >
      {/* style={{ backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }} */}
      <ButtonAppBar></ButtonAppBar>
      {/* <Grid container>
        <Grid item xs={6}>
          <Button onClick={() => navigate("/home")}>Home</Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={() => navigate("/army")}>Armies</Button>
        </Grid>
      </Grid> */}
    </div>

  );
};

export default App;
