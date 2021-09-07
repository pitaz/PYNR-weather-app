export interface WeatherCardProps {
  data: any;
  unit?: string;
  setTime: any;
  setTemp: any;
}

export interface Main {
  temp: string
}
export interface Items {
  main: Main;
  dt_txt: string;
  weather: any;
}