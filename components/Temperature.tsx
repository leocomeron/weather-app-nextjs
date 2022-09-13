import { Typography, styled } from "@mui/material";

export interface TemperatureProps {
  temperature: number;
}

const StyledNumber = styled(Typography)({
  fontWeight: 500,
  fontSize: 144,
  color: "#E7E7EB",
  textAlign: "center",
});

const Temperature = (props: TemperatureProps) => {
  return <StyledNumber>{props.temperature}°C</StyledNumber>;
};

export default Temperature;
