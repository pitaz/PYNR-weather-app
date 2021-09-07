import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRounded from "@material-ui/icons/ArrowForwardIosRounded";
import WeatherCard from "../../components/WeatherCard";

interface WeatherGridProps {
  page: number;
  pages: number;
  items: [];
  handlePrev: () => void;
  value: any;
  setTime: any;
  setTemp: any;
  handleNext: () => void;
}

const WeatherGrid: FC<WeatherGridProps> = ({
  page,
  pages,
  items,
  handlePrev,
  value,
  setTime,
  setTemp,
  handleNext,
}) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {page > 0 ? <ArrowBackIosRounded onClick={handlePrev} /> : null}
        {items?.map((item) => (
          <Grid key={item} item>
            <WeatherCard
              data={item}
              unit={value}
              setTime={setTime}
              setTemp={setTemp}
            />
          </Grid>
        ))}
        {page + 1 < pages && <ArrowForwardIosRounded onClick={handleNext} />}
      </Grid>
    </Grid>
  );
};

export default WeatherGrid;
