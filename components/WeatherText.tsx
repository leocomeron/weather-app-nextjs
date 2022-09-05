import { Typography, styled } from "@mui/material";

const StyledTypography = styled(Typography)({
  color: "#A09FB1",
  fontWeight: 600,
  fontSize: 36,
});

const Weathertext = () => {
  return <StyledTypography>Shower</StyledTypography>;
};

export default Weathertext;
