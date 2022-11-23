import React, { useEffect, useState, useCallback } from "react";
import {
  Card,
  Box,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Loading from "./Loading";
import axios from "axios";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import "../App.css";

const POST_URL = "http://localhost:8000/game/getArmy";
const SEARCH_URL = "http://localhost:8000/game/searchArmy";

const Posts = () => {
  const [army, setArmy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [expanded, setExpanded] = React.useState("");

  const getArmy = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(POST_URL);
      console.log(response);
      if (response.status === 200) {
        setTimeout(() => {
          setArmy(response.data.data);
          setSearch("");
          setIsLoading(false);
        }, 3000);
      } else {
        //console.log(response);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrorMessage("Unable to fetch post list");
    }
  }, []);

  const searchArmy = async () => {
    try {
      if (search.length > 0) {
        setIsLoading(true);
        const response = await axios.get(SEARCH_URL, {
          params: { name: search },
        });
        if (response.status === 200) {
          setTimeout(() => {
            setArmy([response.data.data]);
            setSearch("");
            setIsLoading(false);
          }, 3000);
        } else {
          setIsLoading(false);
        }
      } else {
        getArmy();
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrorMessage("Unable to fetch post list");
    }
  };

  useEffect(() => {
    getArmy();
  }, [getArmy]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const renderPosts = (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => setSearch(e.target.value)}
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={searchArmy} variant="outlined">
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {army?.map((item) => (
            <Accordion onChange={handleChange("panel1")}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{item.army}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Grid container spacing={2}>
                    {item.units.map((childitem) => (
                      <Grid item xs={4}>
                        <Card className="Card-Style">
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {childitem.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                              {childitem.size}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <div className="App">
      {isLoading ? <Loading /> : renderPosts}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Posts;
