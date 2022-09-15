import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const lat = -31.42;
const lon = -64.18;
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const url =
  forecastUrl +
  `lat=${lat}` +
  "&" +
  `lon=${lon}` +
  "&" +
  `appid=0ad247dac36d0f01e5015097858df85e`;

const useFetchForecast = () => {
  const { data, error } = useSWR(url, fetcher);

  return {
    dataForecast: data,
    isLoadingForecast: !error && !data,
    isErrorForecast: error,
  };
};

export default useFetchForecast;
