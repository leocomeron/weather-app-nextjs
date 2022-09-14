export const transformToCelcius = (temp: number) => {
  return Math.round(temp - 273.15);
};

export const imageChecker = (weather: string) => {
  switch (weather) {
    case "Clear":
      return "/Clear.png";
    // case "Hail":
    //   return "/Hail.png";
    // case "few clouds":
    //   return "/LightCloud.png";
    case "Clouds":
      return "/LightCloud.png";
    // case "Shower":
    //   return "/Shower.png";
    case "Drizzle":
      return "/LightRain.png";
    case "Rain":
      return "/HeavyRain.png";
    case "Thunderstorm":
      return "/Thunderstorm.png";
    // case "Sleet":
    //   return "/Sleet.png";
    case "Snow":
      return "/Snow.png";
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
