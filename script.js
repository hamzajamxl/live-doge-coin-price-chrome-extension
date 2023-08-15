document.addEventListener('DOMContentLoaded', function() {
const Dprice = document.getElementById('dogeprice');

const API_KEY=""
const API_URL="https://api.api-ninjas.com/v1/cryptoprice?symbol="

const url = API_URL + "DOGEUSD";

fetch(url, {
    headers: {
        'X-API-KEY': API_KEY
    }
})
.then(response => response.json())
.then(data => {
    const dogeliveprice = data.price;
    Dprice.innerHTML = dogeliveprice + " USD";
})
.catch(error => {
    console.error('Request Failed: ', error);
    Dprice.innerHTML = 'error occured please try again later';
})
})