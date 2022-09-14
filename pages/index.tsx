import React, { useState } from "react";
import type { NextPage } from "next";
import useSWR from "swr";
import Head from "next/head";

import { degToCompass, imageChecker, transformToCelcius } from "../helpers";
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const lat = -31.42;
const lon = -64.18;
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const url =
  currentUrl +
  `lat=${lat}` +
  "&" +
  `lon=${lon}` +
  "&" +
  `appid=0ad247dac36d0f01e5015097858df85e`;

const Home: NextPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { data, error } = useSWR(url, fetcher);
  console.log(data);

  if (!data) return <div>loading...</div>;

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
          <WeatherImage
            src={data && imageChecker(data.weather[0].main)}
            width={234}
            height={234}
          />
          <Temperature temperature={transformToCelcius(data.main.temp)} />
          <Weathertext weather={data.weather[0].main} />
          <TodayText />
          <IconWithText city={data.name} />
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
              <WindCard
                value={Math.round(data.wind.speed)}
                windDirection={data.wind.deg}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <HumidityCard value={data.main.humidity} />
            </Grid>
            <Grid item md={6} xs={12}>
              <VisibilityCard value={data.visibility * 0.00062} />
            </Grid>
            <Grid item md={6} xs={12}>
              <AirPressureCard value={data.main.pressure} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
