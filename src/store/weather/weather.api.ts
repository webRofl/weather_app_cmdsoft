import { IWeatherResponse } from './weather.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'api/weather',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org' }),
  endpoints: (build) => ({
    getWeather: build.query<IWeatherResponse, void>({
      query: () => ({
        url: '/data/2.5/forecast',
        params: {
          q: 'Moscow',
          lang: 'ru',
          appid: '9f3958381b37aee886842a1b6235fd2e',
          cnt: 40,
        },
      }),
    }),
  }),
});
