import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
  borderRadius: "0px",
  color: "#E7E7EB",
  backgroundColor: "#6E707A",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  textTransform: "none",
});

const SearchButton = () => {
  return <StyledButton>Search for places</StyledButton>;
};

export default SearchButton;
