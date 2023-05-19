import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const KEY = '33986302-c82bd3cb912661a9332354fb7';

async function fetchApi(searchQuery, page) {
  const URL = `${BASEURL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(URL);
  return response.data;
}
export default fetchApi;
