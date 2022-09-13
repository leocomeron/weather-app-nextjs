import { Typography, styled, Grid } from "@mui/material";
import VariableCard from "./VariableCard";

export interface AirPressureCardPropsType {
  value: number;
}

const StyledAirPressureDataTypography = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  paddingRight: 12,
});
const StyledAirPressureUnitTypography = styled(Typography)({
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "100px",
});

const AirPressureCard = (props: AirPressureCardPropsType) => {
  return (
    <VariableCard title="Air pressure">
      <Grid item display="flex" justifyContent="center">
        <StyledAirPressureDataTypography>
          {props.value}
        </StyledAirPressureDataTypography>
        <StyledAirPressureUnitTypography>mb</StyledAirPressureUnitTypography>
      </Grid>
    </VariableCard>
  );
};

export default AirPressureCard;
