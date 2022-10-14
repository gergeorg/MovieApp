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

const getGuestSession = async () => {
  const res = await fetch(`${BASE_URL}authentication/guest_session/new?api_key=${API_KEY}`);
  return await res.json();
};

const rateMovie = async (movie_id, rating, guestSession) => {
  const response = await fetch(
    `${BASE_URL}movie/${movie_id}/rating?api_key=${API_KEY}&guest_session_id=${guestSession}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ value: rating }),
    }
  );
  return response;
};

const getGenres = async () => {
  const res = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}${LANGUAGE}`);
  return await res.json();
};

const getRated = async (session) => {
  const res = await fetch(
    `${BASE_URL}guest_session/${session}/rated/movies?api_key=${API_KEY}${LANGUAGE}&sort_by=created_at.asc`
  );
  return await res.json();
};

export { getMovie, getPopular, getSearch, getGuestSession, rateMovie, getGenres, getRated };
