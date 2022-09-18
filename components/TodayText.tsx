import { Typography } from "@mui/material";

const TodayText = () => {
  return (
    <Typography textAlign="center">
      Today ·{" "}
      {new Date().toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })}
    </Typography>
  );
};

export default TodayText;
