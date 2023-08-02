import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container className={"top_60"}>
        <Grid container>
          {/* defining space taken up by left column item. style={{backgroundColor: "red"}} */}
          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={4}
            style={{ paddingRight: "15px" }}
          >
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main-content container_shadow">
                <Routes>
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/" element={<Resume />} />
                </Routes>
              </div>
            </Router>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
