import Image from "next/image";
import { ImageProps } from "next/image";

const WeatherImage = (props: ImageProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image src={props.src} alt="Weather image" width={props.width} height={props.height}></Image>
    </div>
  );
};
export default WeatherImage;
