import { Typography, styled } from "@mui/material";

export interface WeatherTextProps {
  weather: string;
}

const StyledTypography = styled(Typography)({
  color: "#A09FB1",
  fontWeight: 600,
  fontSize: 36,
  textAlign: "center",
});

const Weathertext = (props: WeatherTextProps) => {
  return <StyledTypography>{props.weather}</StyledTypography>;
};

export default Weathertext;
