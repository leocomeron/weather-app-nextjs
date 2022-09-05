import { Typography, styled, Grid, Box } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import VariableCard from "./VariableCard";

export interface humidityCardPropsType {
  value: number;
}

const StyledHumidityDataTypography = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
});
const StyledHumidityUnitTypography = styled(Typography)({
  fontSize: "36px",
  fontWeight: 400,
  lineHeight: "100px",
});
const StyledPercentageTypography = styled(Typography)({
  fontSize: "12px",
  fontWeight: 700,
  color: "#A09FB1",
});

const BorderLinearProgress = styled(LinearProgress)({
  height: 8,
  borderRadius: 80,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E7E7EB",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FFEC65",
  },
});

const HumidityCard = (props: humidityCardPropsType) => {
  return (
    <VariableCard title="Humidity">
      <Grid item display="flex" justifyContent="center">
        <StyledHumidityDataTypography>{props.value}</StyledHumidityDataTypography>
        <StyledHumidityUnitTypography>%</StyledHumidityUnitTypography>
      </Grid>
      <Grid>
        <Grid container justifyContent="space-between">
          <StyledPercentageTypography>0</StyledPercentageTypography>
          <StyledPercentageTypography>50</StyledPercentageTypography>
          <StyledPercentageTypography>100</StyledPercentageTypography>
        </Grid>
        <Grid sx={{ width: "100%" }}>
          <BorderLinearProgress variant="determinate" value={props.value} />
        </Grid>
        <Grid container justifyContent="flex-end">
          <StyledPercentageTypography>%</StyledPercentageTypography>
        </Grid>
      </Grid>
    </VariableCard>
  );
};

export default HumidityCard;
