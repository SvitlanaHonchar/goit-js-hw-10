var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('.country-list');
const inputEl = document.querySelector('input');

const DEBOUNCE_DELAY = 300;

function onInput(e) {
  const country = inputEl.value.trim();
  if (country === '') {
    countryList.innerHTML = '';
    return;
  }
  fetchCountries(country)
    .then(data => {
      const [countryData] = data;
      console.log(data);
      console.log(data.length);
      console.log(data[0]);

      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        countryList.innerHTML = '';

        return;
      }

      if (data.length <= 10 && data.length >= 2) {
        countryList.innerHTML = '';

        for (let i = 0; i < 10; i += 1) {
          createCountryList(data[i]);
        }
        return;
      }

      createCountryCard(countryData);
    })
    .catch(err => {
      console.log(err);
    });
}

// подія

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

//   карточка країни

function createCountryCard(countryData) {
  const languages = Object.values(countryData.languages).join(', ');
  countryList.innerHTML = `<li class="country">
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

  //   return `<li class="country">
  //         <div class="country__header">
  //           <img
  //             class="country__flag"
  //             src="${countryData.flags.svg}"
  //             alt="country flag"
  //             height="35"
  //           />
  //           <p class="country__name">${countryData.name.official}</p>
  //         </div>
  //         <p><span>Capital:</span> ${countryData.capital}</p>
  //         <p><span>Population:</span> ${countryData.population}</p>
  //         <p><span>Languages:</span> ${languages}</p>
  //       </li>`;
}

function createCountryList(countryData) {
  let countryItem = `<li class="country">
        <div class="country__header">
          <img
            class="country__flag"
            src="${countryData.flags.svg}"
            alt="country flag"
            width="35"
          />
          <p class="country__name--list">${countryData.name.official}</p>
        </div>
      </li>`;
  countryList.insertAdjacentHTML('beforeend', countryItem);
}
