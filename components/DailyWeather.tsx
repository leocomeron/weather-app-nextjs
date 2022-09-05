import { Typography, Grid, styled } from "@mui/material";
import WeatherImage from "./WeatherImage";

const StyledContainer = styled(Grid)({
  backgroundColor: "#1E213A",
  maxWidth: 120,
  padding: 18,
});

const StyledTypographyContainer = styled(Grid)({
  justifyContent: "space-between",
  paddingTop: "31px",
});

const DailyWeather = () => {
  return (
    <StyledContainer>
      <Typography textAlign="center" paddingBottom="10px">
        Tomorrow
      </Typography>
      <WeatherImage src="/Shower.png" width={56} height={62} />
      <StyledTypographyContainer container>
        <Typography>16˚C</Typography>
        <Typography>11˚C</Typography>
      </StyledTypographyContainer>
    </StyledContainer>
  );
};

export default DailyWeather;
