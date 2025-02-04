// Contenido de app.js 
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros = oneEuroIs["USD"]
}
console.log(fromEuroToDollar(1000))

module.exports = {fromEuroToDollar}
