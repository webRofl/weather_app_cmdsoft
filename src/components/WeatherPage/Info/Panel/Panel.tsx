import React from 'react';
import PanelCard from './PanelCard/PanelCard';
import classes from './Panel.module.css';
import { useTypedSelector } from '../../../../hooks/redux';
import { IWeatherInfo } from '../../../../store/weather/weather.type';

const Panel: React.FC = () => {
  const { data } = useTypedSelector((state) => state['slice/weather']);

  const { pageIndex } = useTypedSelector((state) => state['slice/slider']);

  const cardMapping = (data: IWeatherInfo[]) => {
    return data.map((weather, index) => {
      if (index % 8 === 0)
        return (
          <PanelCard
            date={weather.dt_txt}
            humidity={weather.main.humidity}
            temp={weather.main.temp}
            windSpeed={weather.wind.speed}
            key={index}
            index={index}
          />
        );
      else return null;
    });
  };

  const panelWrapperStyles = {
    transform: `translateX(-${32 * pageIndex}vw)`,
  };

  return (
    <div className={classes.panel__wrapper} style={panelWrapperStyles}>
      {cardMapping(data)}
    </div>
  );
};

export default Panel;
