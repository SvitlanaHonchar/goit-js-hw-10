var e;(e="peru",fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.5dc3bc10.js.map
