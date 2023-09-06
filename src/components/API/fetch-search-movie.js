import axios from 'axios';

const API_KEY = '4c3007a9629b6abce42eca24ebb164b2';

const fetchSearch = async keyword => {
  if (keyword) {
    const URL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export { fetchSearch };
