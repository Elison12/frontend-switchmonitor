import React from "react";
import TopBar from "../../Components/TopBar";
import HomePage from "../../Components/HomePage"
import { Grid } from "./style";


const Home = () => {
    return(
         <Grid>
            <TopBar />
            <HomePage />
         </Grid>
    )
}

export default Home;