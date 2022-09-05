import { Typography, styled } from "@mui/material";

const StyledNumber = styled(Typography)({
  fontWeight: 500,
  fontSize: 144,
  color: "#E7E7EB",
});

const Temperature = () => {
  return <StyledNumber>15°C</StyledNumber>;
};

export default Temperature;
