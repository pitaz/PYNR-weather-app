import React, { Suspense } from 'react';
import loadable from "@loadable/component";

 const WeatherComponent =  loadable(() => import("./CityWeather"));

export default () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <WeatherComponent />
      </Suspense>
    </div>
  );
}
