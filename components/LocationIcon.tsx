import { IconButton, styled } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const StyledIconButton = styled(IconButton)({
  color: "#E7E7EB",
  backgroundColor: "#6E707A",
});

const LocationIcon = () => {
  return (
    <StyledIconButton color="inherit">
      <GpsFixedIcon />
    </StyledIconButton>
  );
};

export default LocationIcon;
