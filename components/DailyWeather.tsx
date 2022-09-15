import { Typography, Grid, styled } from "@mui/material";
import WeatherImage from "./WeatherImage";

export interface DailyWeatherPropsType {
  day: string;
  weather: string;
  minTemp: number;
  maxTemp: number;
}

const StyledContainer = styled(Grid)({
  backgroundColor: "#1E213A",
  maxWidth: 120,
  padding: 18,
});

const StyledTypographyContainer = styled(Grid)({
  justifyContent: "space-between",
  paddingTop: "31px",
});

const DailyWeather = (props: DailyWeatherPropsType) => {
  return (
    <StyledContainer>
      <Typography textAlign="center" paddingBottom="10px">
        {props.day}
      </Typography>
      <WeatherImage src={props.weather} width={56} height={62} />
      <StyledTypographyContainer container>
        <Typography>{props.maxTemp}°C</Typography>
        <Typography>{props.minTemp}°C</Typography>
      </StyledTypographyContainer>
    </StyledContainer>
  );
};

export default DailyWeather;
