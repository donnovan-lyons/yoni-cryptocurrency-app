// Needs some serious refactoring

function addUSDConversionBTC(zar, usdRate) {
    let conversion = zar/usdRate
    div = document.getElementById('btc-zar-to-usd')
    div.innerHTML = conversion;
}
function addUSDBTC(rate) {
    div = document.getElementById('btc-coinbase');
    div.innerHTML = rate;
}

function addUSDConversionETH(zar, usdRate) {
    let conversion = zar/usdRate
    div = document.getElementById('eth-zar-to-usd')
    div.innerHTML = conversion;
}
function addUSDETH(rate) {
    div = document.getElementById('eth-coinbase');
    div.innerHTML = rate;
}

function addUSDConversionXRP(zar, usdRate) {
    let conversion = zar/usdRate
    div = document.getElementById('xrp-zar-to-usd')
    div.innerHTML = conversion;
}
function addUSDXRP(rate) {
    div = document.getElementById('xrp-coinbase');
    div.innerHTML = rate;
}

document.addEventListener('DOMContentLoaded', ()=> {

    let btcZar = document.getElementById('btc-zar').innerHTML;
    let ethZar = document.getElementById('eth-zar').innerHTML;
    let xrpZar = document.getElementById('xrp-zar').innerHTML;

    function getLunoBTC() {
        return fetch("https://free.currconv.com/api/v7/convert?q=USD_ZAR&compact=ultra&apiKey=8b6301ff940de9396b18")
        .then(resp => resp.json())
        .then(function(data) {
            addUSDConversionBTC(btcZar, data.USD_ZAR);
        })
    }

    function getCoinbaseBTC() {
        return fetch("https://api.coinbase.com/v2/prices/spot?currency=USD")
        .then(resp => resp.json())
        .then(function(data) {
            addUSDBTC(data.data.amount);
        })
    }

    function addCalculationBTC() {
        let luno = parseFloat(document.getElementById('btc-zar-to-usd').innerHTML)
        let coinbase = parseFloat(document.getElementById('btc-coinbase').innerHTML)
        let percentage = coinbase/luno
        document.getElementById('btc-difference').innerHTML = Math.abs(1-percentage)*100
    }

    getLunoBTC().then(getCoinbaseBTC).then( () => addCalculationBTC())

    function getLunoETH() {
        return fetch("https://free.currconv.com/api/v7/convert?q=USD_ZAR&compact=ultra&apiKey=8b6301ff940de9396b18")
        .then(resp => resp.json())
        .then(function(data) {
            addUSDConversionETH(ethZar, data.USD_ZAR);
        })
    }

    function getCoinbaseETH() {
        return fetch("https://api.coinbase.com/v2/prices/ETH-USD/buy")
        .then(resp => resp.json())
        .then(function(data) {
            addUSDETH(data.data.amount);
        })
    }

    function addCalculationETH() {
        let luno = parseFloat(document.getElementById('eth-zar-to-usd').innerHTML)
        let coinbase = parseFloat(document.getElementById('eth-coinbase').innerHTML)
        let percentage = coinbase/luno
        document.getElementById('eth-difference').innerHTML = Math.abs(1-percentage)*100
    }

    getLunoETH().then(getCoinbaseETH).then( () => addCalculationETH())

    function getLunoXRP() {
        return fetch("https://free.currconv.com/api/v7/convert?q=USD_ZAR&compact=ultra&apiKey=8b6301ff940de9396b18")
        .then(resp => resp.json())
        .then(function(data) {
            addUSDConversionXRP(xrpZar, data.USD_ZAR);
        })
    }

    function getCoinbaseXRP() {
        return fetch("https://api.coinbase.com/v2/prices/XRP-USD/buy")
        .then(resp => resp.json())
        .then(function(data) {
            addUSDXRP(data.data.amount);
        })
    }

    function addCalculationXRP() {
        let luno = parseFloat(document.getElementById('xrp-zar-to-usd').innerHTML)
        let coinbase = parseFloat(document.getElementById('xrp-coinbase').innerHTML)
        let percentage = coinbase/luno
        document.getElementById('xrp-difference').innerHTML = Math.abs(1-percentage)*100
    }

    getLunoXRP().then(getCoinbaseXRP).then( () => addCalculationXRP())

  }
)