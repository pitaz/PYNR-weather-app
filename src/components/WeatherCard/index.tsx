import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

export interface WeatherCardProps {
  data: []
}

const WeatherCard: FC<WeatherCardProps> = ({data}) => {
  const classes = useStyles();
  console.log('data :>> ', data[1]);
  return (
    <Card className={classes.card}>
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
         5 C
        </Typography>
        <Typography
          className={classes.date}
          color="textSecondary"
          gutterBottom
        >
         15 Sept, 2021
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
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
    fontSize: 64,
  },
  date: {
    fontSize: 20,
  }
}));

export default WeatherCard;
