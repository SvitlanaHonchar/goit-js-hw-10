import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('.country-list');
const inputEl = document.querySelector('input');

const DEBOUNCE_DELAY = 300;
// const country = 'peru';

function onInput(e) {
  const country = inputEl.value;
  //   console.log(country);
  fetchCountries(country)
    .then(data => {
      //   console.log(data);
      const [countryData] = data;
      countryList.innerHTML = createCountryCard(countryData);
    })
    .catch(err => {
      console.log(err);
    });
}

// подія

inputEl.addEventListener('input', onInput);

//   карточка країни

function createCountryCard(countryData) {
  const languages = Object.values(countryData.languages).join(', ');

  return `<li class="country">
        <div class="country__header">
          <img
            class="country__flag"
            src="${countryData.flags.svg}"
            alt="country flag"
            height="35"
          />
          <p class="country__name">${countryData.name.official}</p>
        </div>
        <p><span>Capital:</span> ${countryData.capital}</p>
        <p><span>Population:</span> ${countryData.population}</p>
        <p><span>Languages:</span> ${languages}</p>
      </li>`;
}
