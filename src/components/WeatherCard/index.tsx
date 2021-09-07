import React, { FC } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { Items, WeatherCardProps } from "./interfaces";
import { WeatherData } from "./types";

/**
 * This component returns the weather card view
 * 
 * @param data
 * @param unit
 * @param setTime
 * @param setTemp 
 * @returns {JSX}
 */
const WeatherCard: FC<WeatherCardProps> = ({
  data,
  unit,
  setTime,
  setTemp,
}) => {
  const classes = useStyles();
  const weatherData: WeatherData = data[1];
  const weatherItem: Items = data[1][0];

  /**
   * handles card select
   */
  const handleSelect = () => {
    const temp = weatherData?.map((item: Items) => item?.main?.temp);
    const time = weatherData?.map((item: Items) =>
      dayjs(item?.dt_txt).format("hh:MM A")
    );
    setTemp(temp);
    setTime(time);
  };
  return (
    <Card className={classes.card} onClick={handleSelect}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Temperature
        </Typography>
        <Typography
          className={classes.temperature}
          color="textSecondary"
          gutterBottom
        >
          {weatherItem?.main?.temp} {unit === 'metric' ? 'C' : 'F'}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {weatherItem?.weather[0]?.main}
        </Typography>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {dayjs(weatherItem?.dt_txt).format("DD MMM YYYY")}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    height: 240,
    width: 204,
  },
  bar: {
    padding: "20px 30px",
  },
  title: {
    fontSize: 14,
  },
  temperature: {
    fontSize: 34,
  },
  date: {
    fontSize: 20,
  },
}));

export default WeatherCard;
