import React, { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CssBaseline,
  Grid,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomButton from "../../components/Button";
import "./styles.scss";
import { options } from "./data";
import { CityWeatherProps } from "./interface";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/actions/weather";
import { groupBy } from "../../utils/groupBy";
import { checkDevice } from "../../utils/checkMobile";
import ScreenLoader from "../../components/ScreenLoader";
import { useCallback } from "react";
import WeatherGrid from "./WeatherGrid";

/**
 * This component returns the Weather card and bar chart
 * @returns {JSX}
 */
const CityWeather: FC<CityWeatherProps> = () => {
  const classes = useStyles();
  const [value, setValue] = useState<any>("metric");
  const [list, setList] = useState<any>();
  const [perPage, setPerpage] = useState<number>(3);
  const [page, setPage] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [temp, setTemp] = useState<any>();
  const [time, setTime] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const isMobile = checkDevice();
  const dispatch = useDispatch<any>();

  /**
   * Handles radio event
   * @param event event
   */
  const handleRadioChange = (event: any) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isMobile) {
      setPerpage(1);
    }
  }, [isMobile]);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const res = await dispatch(fetchWeather(value));
      const groupData = groupBy(res?.payload?.data?.list, "dt_txt");
      const reslist = Object.entries(groupData);
      setList(reslist);
      setPages(Math.ceil(reslist?.length / perPage));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [perPage, value]);

  useEffect(() => {
    fetch();
  }, [value, perPage]);

  const items = list?.slice(page * perPage, (page + 1) * perPage);
  const chartData = {
    labels: time,
    datasets: [
      {
        label: "Temp",
        data: temp,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return  <h1 className="page-title">An eror occurred</h1>;
  }
  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    const actualPage = page + 1;
    if (actualPage < pages) {
      setPage(page + 1);
    }
  };
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
              aria-label="temp"
              name="temp"
              className={classes.radioGroup}
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                id="unit-celsius"
                value="metric"
                control={<Radio />}
                label="Celsius"
              />
              <FormControlLabel
                id="unit-fahrenheit"
                value="imperial"
                control={<Radio />}
                label="Fahrenheit"
              />
            </RadioGroup>
            <CustomButton title="refresh" onClick={fetch} />
          </Grid>
        </Grid>
        <WeatherGrid
          page={page}
          pages={pages}
          items={items}
          value={value}
          handlePrev={handlePrev}
          handleNext={handleNext}
          setTemp={setTemp}
          setTime={setTime}
        />
        <Bar data={chartData} options={options} height={120} />
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
    flexDirection: "row",
  },
}));

export default CityWeather;
