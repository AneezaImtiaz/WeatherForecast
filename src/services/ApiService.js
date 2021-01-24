import axios from 'axios';

let { config } = window;

config = { apiUrl: 'http://api.openweathermap.org/data/' };


export default class Api {

  static async get(url, throwErrors = false) {
    try {
      const response = await axios.get(config.apiUrl + url);
      if (throwErrors && (response.status <= 100 || response.status >= 400)) {
        return new Error(
          response?.data?.errors
            ? Object.values(response?.data?.errors)[0]
            : response?.data?.message,
        );
      }
      return response;
    } catch (e) {  
       return e.response }
  }
}
