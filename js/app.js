
var settings = {
  "url": "http://example.com/.DefaultParameterValue.com.br/buscaautocomplete?productNameContains=jeans",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-VTEX-API-AppKey": "vtexappkey-medipielsa-TKGBUP",
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
};
 
$.ajax(settings).done(function (response) {
  console.log(response);
});

