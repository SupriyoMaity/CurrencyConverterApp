
let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
const fromdropDowm = document.getElementById("from-currency-select");
const todropDowm = document.getElementById("to-currency-select");
const result = document.getElementById("result");

// Define your currencies array
// Example currencies

currencies.forEach(element => {
    const option = document.createElement('option');
    option.value = element;
    option.text = element;
    fromdropDowm.add(option);
});
currencies.forEach(element => {
    const option = document.createElement('option');
    option.value = element;
    option.text = element;
    todropDowm.add(option);
});
fromdropDowm.value = "USD";
todropDowm.value = "INR";


let convert = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromdropDowm.value;
    const toCurrency = todropDowm.value;

    if (amount.length != 0) {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                let  fromExchangerate = data.conversion_rates[fromCurrency];
                let toExchangeRate=data.conversion_rates[toCurrency];
                const convertamount= (amount / fromExchangerate)*toExchangeRate ;
                if (result) { // Check if result is not null
                    result.innerHTML= `${amount} ${fromCurrency} is equal to ${convertamount.toFixed(2)} ${toCurrency}`;
                } else {
                    console.error("Result element not found!");
                }
            });          
    }
    else{
        alert("please fill in the amount")
    }
};

document
.querySelector('#convert-btn')
.addEventListener('click', convert);
window.addEventListener("load",convert)
