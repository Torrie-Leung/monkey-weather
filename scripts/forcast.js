class Forecast{
  constructor() {
    this.key = 'PGpHdVl5t1gGiVXWbsfhmOlK28Y9KTyQ';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    return {cityDetails,weather};
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }
  async getWeather(code) {
    const query = `${code}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}


// const key ='PGpHdVl5t1gGiVXWbsfhmOlK28Y9KTyQ';

//get weather info
// const getWeather = async(code) => {
//   const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//   const query = `${code}?apikey=${key}`;

//   const response = await fetch(base + query);
//   const data = await response.json();
//   return data[0];
// }

//get city info
// const getCity = async (city) => {
//   const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
//   const query = `?apikey=${key}&q=${city}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   return data[0];
// };

// getCity('london').then(data => {
//     return getWeather(data.Key);
//   }).then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

