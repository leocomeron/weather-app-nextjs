import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography, Grid } from "@mui/material";

export interface IconWithTextProps {
  city: string;
}

const IconWithText = (props: IconWithTextProps) => {
  return (
    <Grid container display="flex" justifyContent="center">
      <LocationOnIcon />
      <Typography>{props.city}</Typography>
    </Grid>
  );
};

export default IconWithText;
