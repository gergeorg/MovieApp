const API_KEY = '068076261fd423e6d7fa4ed4921d30da';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

function connectingError() {
  if (!navigator.onLine) {
    throw new Error('Отсутствует подключение к сети!');
  }
}

async function getMovie(url) {
  connectingError();

  const response = await fetch(`${BASE_URL}movie/${url}?api_key=${API_KEY}${LANGUAGE}`);

  if (!response.ok) {
    throw new Error(`Не удалось получить данные, ошибка ${response.status}`);
  }

  return await response.json();
}

const getPopular = async () => {
  const res = await getMovie('popular');
  return await res.results;
};

export { getMovie, getPopular };
