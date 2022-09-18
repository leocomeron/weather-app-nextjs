import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const lat = -31.42;
const lon = -64.18;
const forecastUrl = "https://api.open-meteo.com/v1/forecast?";
const url =
  forecastUrl +
  `latitude=${lat}` +
  "&" +
  `longitude=${lon}` +
  "&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo";

const useFetchForecast = () => {
  const { data, error } = useSWR(url, fetcher);

  return {
    dataForecast: data,
    isLoadingForecast: !error && !data,
    isErrorForecast: error,
  };
};

export default useFetchForecast;
