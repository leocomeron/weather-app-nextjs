import { Typography, styled, Grid } from "@mui/material";
import VariableCard from "./VariableCard";

export interface airPressureCardPropsType {
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

const VisibilityCard = (props: airPressureCardPropsType) => {
  return (
    <VariableCard title="Visibility">
      <Grid item display="flex" justifyContent="center">
        <StyledAirPressureDataTypography>
          {props.value.toString().replace(".", ",")}
        </StyledAirPressureDataTypography>
        <StyledAirPressureUnitTypography>miles</StyledAirPressureUnitTypography>
      </Grid>
    </VariableCard>
  );
};

export default VisibilityCard;
