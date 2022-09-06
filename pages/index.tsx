import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Typography, Drawer } from "@mui/material";

import LocationIcon from "../components/LocationIcon";
import SearchButton from "../components/SearchButton";
import Temperature from "../components/Temperature";
import WeatherImage from "../components/WeatherImage";
import Weathertext from "../components/WeatherText";
import TodayText from "../components/TodayText";
import IconWithText from "../components/IconWithText";
import DailyWeather from "../components/DailyWeather";
import WindCard from "../components/WindCard";
import HumidityCard from "../components/HumidityCard";
import VisibilityCard from "../components/VisibilityCard";
import AirPressureCard from "../components/AirPressureCard";

const Home: NextPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Created by Leandro Comerón" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container overflow="auto" height="100vh">
        <Grid item xs={4} sx={{ background: "#1E213A" }}>
          <SearchButton />
          <LocationIcon />
          <WeatherImage src="/Shower.png" width={202} height={234} />
          <Temperature />
          <Weathertext />
          <TodayText />
          <IconWithText />
        </Grid>
        <Drawer open={isDrawerOpen}>dddd</Drawer>
        <Grid item xs={8} paddingLeft={4}>
          <Grid container spacing={3}>
            {[0, 1, 2, 3, 4].map((a) => (
              <Grid item key={a}>
                <DailyWeather />
              </Grid>
            ))}
          </Grid>

          <Typography fontSize={24} fontWeight={700}>
            Today&apos;s hightlights
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <WindCard value={7} />
            </Grid>
            <Grid item md={6} xs={12}>
              <HumidityCard value={84} />
            </Grid>
            <Grid item md={6} xs={12}>
              <VisibilityCard value={6.4} />
            </Grid>
            <Grid item md={6} xs={12}>
              <AirPressureCard value={998} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
