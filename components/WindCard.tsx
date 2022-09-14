import { Typography, styled, Grid } from "@mui/material";
import VariableCard from "./VariableCard";
import NavigationIcon from "@mui/icons-material/Navigation";
import { degToCompass } from "../helpers";

export interface windCardPropsType {
  value: number;
  windDirection: number;
}

const StyledWindDataTypography = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
});
const StyledWindUnitTypography = styled(Typography)({
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "100px",
});

const WindCard = (props: windCardPropsType) => {
  return (
    <VariableCard title="Wind status">
      <Grid item display="flex" justifyContent="center">
        <StyledWindDataTypography>{props.value}</StyledWindDataTypography>
        <StyledWindUnitTypography>mph</StyledWindUnitTypography>
      </Grid>
      <Grid item display="flex" justifyContent="center">
        <Grid alignItems="center" display="flex">
          <NavigationIcon
            fontSize="inherit"
            sx={{
              color: "#E7E7EB",
              marginRight: 1,
              rotate: `${props.windDirection - 180}deg`,
            }}
          />
        </Grid>
        <Typography fontSize={14} alignItems="center" display="flex">
          {degToCompass(props.windDirection)}
        </Typography>
      </Grid>
    </VariableCard>
  );
};

export default WindCard;
