import React from 'react';
import { Chart, Series } from 'devextreme-react/chart';
import { useTypedSelector } from '../../../../hooks/redux';
import classes from './BarChart.module.css';

const BarChart: React.FC = () => {
  const { chartData } = useTypedSelector((state) => state['slice/weather']);

  return (
    <Chart
      id="chart"
      dataSource={chartData}
      className={classes.barChart__wrapper}
    >
      <Series
        valueField="temp"
        argumentField="time"
        name="Температура"
        type="bar"
        color="#ffaa66"
      />
    </Chart>
  );
};

export default BarChart;
