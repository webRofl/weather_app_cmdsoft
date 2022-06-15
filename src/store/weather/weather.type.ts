export interface ICity {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: string;
  timezone: string;
  sunrise: string;
  sunset: string;
}

export interface IWeatherInfo {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface IWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherInfo[];
  city: ICity;
}

export interface IWeatherState {
  data: IWeatherInfo[];
  chartData: ICharData[];
  unit: 'C' | 'F';
}

export interface ICharData {
  temp: number | null;
  time: string;
}
