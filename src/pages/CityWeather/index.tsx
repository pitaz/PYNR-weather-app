import React, { FC, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CssBaseline,
  Grid,
  RadioGroup,
  Radio
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRounded from "@material-ui/icons/ArrowForwardIosRounded";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomButton from "../../components/Button";
import "./styles.scss";
import WeatherCard from "../../components/WeatherCard";
import { data, options } from "./data";
import { CityWeatherProps, Event } from "./interface";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/actions/weather";
import wdata from '../../response.json'
import { groupBy } from "../../utils/groupBy";




const CityWeather: FC<CityWeatherProps> = () => {
  const [value, setValue] = React.useState<Event>();
  const dispatch = useDispatch();

  const handleRadioChange = (event: any) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const dateT = new Date('2021-08-27 03:00:00');
const date1 = dateT.getDate();


  console.log(wdata)
  const res = groupBy(wdata?.list, "dt_txt");
console.log("group by:", Object.entries(res));
  // useEffect(() => {
  //   (async () => {
  //     const res = await dispatch(fetchWeather());
  //     console.log('res :>> ', res);
  //   })()
  // }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="city-weather">
        <h1 className="page-title">Weather app</h1>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              className={classes.radioGroup}
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="celsius"
                control={<Radio />}
                label="Celsius"
              />
              <FormControlLabel
                value="fahrenheit"
                control={<Radio />}
                label="Fahrenheit"
              />
            </RadioGroup>
          <CustomButton title="refresh" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <ArrowBackIosRounded />
            {Object.entries(res).map((value) => (
              <Grid key={value} item>
                <WeatherCard data={value} />
              </Grid>
            ))}
            <ArrowForwardIosRounded />
          </Grid>
        </Grid>
        <Bar data={data} options={options} height={120} />
      </Container>
    </React.Fragment>
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
  radioGroup: {
    flexDirection: 'row'
  }
}));

export default CityWeather;
