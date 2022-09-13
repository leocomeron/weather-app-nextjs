import { Typography, styled, Grid } from "@mui/material";
import VariableCard from "./VariableCard";

export interface VisibilityCardPropsType {
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

const VisibilityCard = (props: VisibilityCardPropsType) => {
  return (
    <VariableCard title="Visibility">
      <Grid item display="flex" justifyContent="center">
        <StyledVisibilityDataTypography>
          {props.value.toString().replace(".", ",")}
        </StyledVisibilityDataTypography>
        <StyledVisibilityUnitTypography>miles</StyledVisibilityUnitTypography>
      </Grid>
    </VariableCard>
  );
};

export default VisibilityCard;
