import { Box, styled, Typography, Grid } from "@mui/material";

const StyledCard = styled(Box)({
  backgroundColor: "#1E213A",
  maxWidth: 328,
  maxHeight: 204,
  padding: 22,
});

export interface VariableCardPropsTypes {
  title: string;
  children?: any;
}
const VariableCard = (props: VariableCardPropsTypes) => {
  return (
    <StyledCard>
      <Typography textAlign="center">{props.title}</Typography>
      {props.children}
    </StyledCard>
  );
};

export default VariableCard;
