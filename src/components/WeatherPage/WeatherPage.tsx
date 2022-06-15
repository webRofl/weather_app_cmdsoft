import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { weatherApi } from '../../store/weather/weather.api';
import { weatherAction } from '../../store/weather/weather.slice';
import { sliderAction } from '../../store/slider/slider.slice';
import ErrorComponent from '../common/ErrorComponent/ErrorComponent';
import Preloader from '../common/Preloader/Preloader';
import Control from './Control/Control';
import Info from './Info/Info';
import classes from './WeatherPage.module.css';

const WeatherPage: React.FC = () => {
  const { error, isLoading, data } = weatherApi.useGetWeatherQuery();

  const dispatch = useDispatch();

  const { setWeatherData } = weatherAction;

  const { setTotalPage } = sliderAction;

  useEffect(() => {
    if (data?.list) {
      dispatch(setWeatherData(data?.list));
      dispatch(setTotalPage(data.list.length / 8));
    }
  }, [data?.list]);

  if (isLoading) return <Preloader isFullScreen={true} />;

  if (error)
    return (
      <ErrorComponent
        error="Произошла ошибка во время загрузки"
        isFullScreen={true}
      />
    );

  return (
    <div className={classes.weatherPage__wrapper}>
      <Control />
      <Info />
    </div>
  );
};

export default WeatherPage;
