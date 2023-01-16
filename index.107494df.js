!function(){var n;(n="peru",fetch("".concat("https://restcountries.com","/v3.1/name/").concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))}();
//# sourceMappingURL=index.107494df.js.map
