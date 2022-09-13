import { styled } from "@mui/material";
import Image from "next/image";
import { ImageProps } from "next/image";

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const WeatherImage = (props: ImageProps) => {
  return (
    <StyledDiv>
      <Image
        src={props.src}
        alt="Weather image"
        width={props.width}
        height={props.height}
        objectFit="contain"
      ></Image>
    </StyledDiv>
  );
};
export default WeatherImage;
