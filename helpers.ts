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
      return "/HeavyCloud.png";
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
