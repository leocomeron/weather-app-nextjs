import { Typography, styled, Grid } from "@mui/material";
import VariableCard from "./VariableCard";

export interface visibilityCardPropsType {
  value: number;
}

const StyledVisibilityDataTypography = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  paddingRight: 12,
});
const StyledVisibilityUnitTypography = styled(Typography)({
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "100px",
});

const AirPressureCard = (props: visibilityCardPropsType) => {
  return (
    <VariableCard title="Air pressure">
      <Grid item display="flex" justifyContent="center">
        <StyledVisibilityDataTypography>{props.value}</StyledVisibilityDataTypography>
        <StyledVisibilityUnitTypography>mb</StyledVisibilityUnitTypography>
      </Grid>
    </VariableCard>
  );
};

export default AirPressureCard;
