import axios from 'axios';

const BASE_URL = 'https://restcountries.eu/rest/v2';

export async function getCountries() {
  try {
    const response = await axios.get(`${BASE_URL}/all?fields=name;alpha3Code;currencies;flag;cioc`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
