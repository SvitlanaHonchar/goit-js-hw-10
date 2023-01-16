import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const country = 'peru';

fetchCountries(country)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
