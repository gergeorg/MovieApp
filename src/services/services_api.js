const API_KEY = '068076261fd423e6d7fa4ed4921d30da';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

function connectingError() {
  if (!navigator.onLine) {
    throw new Error('Отсутствует подключение к сети!');
  }
}

const getMovie = async (url, query, page) => {
  connectingError();

  let requestAddress = `${BASE_URL}${url}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;

  //${BASE_URL}search/company?api_key=<<api_key>>&page=1

  if (url === 'search/movie') {
    requestAddress += `&query=${query}&page=${page}&include_adult=false`;
  }

  const response = await fetch(requestAddress);

  if (!response.ok) {
    throw new Error(`Не удалось получить данные, ошибка ${response.status}`);
  }

  return await response.json();
};

const getPopular = async (page) => {
  const res = await getMovie('movie/popular', '', page);
  return await res;
};

const getSearch = async (query, page) => {
  const res = await getMovie('search/movie', query, page);
  return await res;
};

getPopular();

export { getMovie, getPopular, getSearch };

//  `${BASE_URL}search/company?api_key=${API_KEY}&query
