import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { timeTranslator } from '../../../../../utils/timeTranslator';
import {
  conversionKelvinToCelsius,
  conversionKelvinToFahrenheit,
} from '../../../../../utils/conversions';
import { useTypedSelector } from '../../../../../hooks/redux';
import { useDispatch } from 'react-redux';
import { weatherAction } from '../../../../../store/weather/weather.slice';

interface PanelCardProps {
  humidity: number;
  temp: number;
  windSpeed: number;
  date: string;
  index: number;
}

const PanelCard: React.FC<PanelCardProps> = ({
  humidity,
  temp,
  windSpeed,
  date,
  index,
}) => {
  const [weekday, monthNumber] = timeTranslator(date);

  const { data, unit } = useTypedSelector((state) => state['slice/weather']);

  const dispatch = useDispatch();

  const { setChartData } = weatherAction;

  useEffect(() => {
    const chartData = data
      .map((weather, i) => {
        if (i >= index && i < index + 8) {
          return {
            temp:
              unit === 'C'
                ? conversionKelvinToCelsius(weather.main.temp)
                : conversionKelvinToFahrenheit(weather.main.temp),
            time: `${weather.dt_txt.split(' ')[1].slice(0, 5)}`,
          };
        } else {
          return {
            temp: null,
            time: '',
          };
        }
      })
      .filter((data) => data.temp !== null);

    dispatch(setChartData(chartData));
  }, [unit]);

  const handleClickCard = () => {
    const chartData = data
      .map((weather, i) => {
        if (i >= index && i < index + 8) {
          return {
            temp:
              unit === 'C'
                ? conversionKelvinToCelsius(weather.main.temp)
                : conversionKelvinToFahrenheit(weather.main.temp),
            time: `${weather.dt_txt.split(' ')[1].slice(0, 5)}`,
          };
        } else {
          return {
            temp: null,
            time: '',
          };
        }
      })
      .filter((data) => data.temp !== null);

    dispatch(setChartData(chartData));
  };

  return (
    <Card
      sx={{
        width: '32vw',
        border: '1px solid black',
        marginTop: '5vw',
        display: 'flex',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}
      onClick={handleClickCard}
    >
      <CardContent>
        <Typography variant="h2">{weekday}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {monthNumber}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {`${
            unit === 'C'
              ? conversionKelvinToCelsius(temp)
              : conversionKelvinToFahrenheit(temp)
          }°${unit}`}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {humidity} %
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {windSpeed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PanelCard;
