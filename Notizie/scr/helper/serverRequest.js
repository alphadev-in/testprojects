import axios from 'axios';

async function serverRequest(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Network Erro:' + url + ' : ' + error);
  }
}

export default serverRequest;
