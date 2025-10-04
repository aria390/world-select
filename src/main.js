import "./style.css";

const countryEl = document.getElementById("contaner");
const btnEl = document.getElementById("lightDarkBtn");

const getCountryEl = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3"
  );
  const counries = await res.json();

  counries.forEach((country) => {
    countryEl.innerHTML += `
    <li class="bg-white shdaow-custum2 overflow-hidden rounded-[4px] cursor-pointer flex flex-col gap-[16px] transition-all hover:scale-105">
          <div class="w-[264px] h-[160px] overflow-hidden rounded-[4px]">
            <img class="w-full h-full overflow-hidden rounded-[4px]" src="${country.flags.png}" alt="country-image" />
          </div>
          <div class="p-[24px] pb-[46px] flex flex-col gap-[10px]">
            <h1 class="text-[22px] font-[700]">${country.name.common}</h1>
          <div class="flex flex-col gap-[4px]">
            <span class="text-[16px] font-[500]">Population:${country.population}</span>
            <span class="text-[16px] font-[500]">Region:${country.region}</span>
            <span class="text-[16px] font-[500]">Capital:${country.capital}</span>
          </div>
          </div>
        </li>
    `;
  });
};

getCountryEl();
