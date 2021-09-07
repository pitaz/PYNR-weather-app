import axios from 'axios';

const https = axios.create({
  baseURL:
    'https://api.openweathermap.org/data/2.5',
});

// https.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default https;
