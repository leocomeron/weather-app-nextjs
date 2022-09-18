export const transformToCelcius = (temp: number) => {
  return Math.round(temp - 273.15);
};

export const imageChecker = (weather: string | number) => {
  switch (weather) {
    case "Clear":
    case 0:
      return "/Clear.png";
    // case "Hail":
    //   return "/Hail.png";
    case 1:
    case 2:
    case 3:
      return "/LightCloud.png";
    case "Clouds":
      return "/LightCloud.png";
    // case "Shower":
    //   return "/Shower.png";
    case "Drizzle":
    case 51:
    case 53:
    case 55:
      return "/LightRain.png";
    case "Rain":
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return "/HeavyRain.png";
    case "Thunderstorm":
    case 95:
    case 96:
    case 99:
      return "/Thunderstorm.png";
    // case "Sleet":
    //   return "/Sleet.png";
    case "Snow":
    case 71:
    case 73:
    case 75:
    case 77:
      return "/Snow.png";
    case 45:
    case 48:
      return "/fog.png";
    default:
      return "/fog.png";
  }
};

export const degToCompass = (deg: number) => {
  const n = Math.round(deg / 22.5 + 0.5);
  const cardinalPointsArray = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return cardinalPointsArray[n];
};

export const dayOfTheWeek = (dt_txt: string) => {
  const date = new Date(dt_txt);
  const dayString = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayString;
};
