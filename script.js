const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

// T(°F) = T(°C) * 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8


//Cel funkcji: zamiana tekstu °C na °F i na odwrót
//1. Sprawdź jaką wartość przechowuje span.one
//2. Na jej podstawie zmień treść w span.one oraz span.two
//3. Funkcja ma się odpalać na kliknięcie w przycisk "Zamień"

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
    }
}


//Cel funkcji: zamień °F na °C
//1. Musimy podstawić odpowiednie wartości pod wzór.
//2. Stopnie °C musimy pobierać z inputa.
//3. Funkcja ma wypisywać wynik w paragrafie, który jest pobrany do
//   zmiennej 'result, np "X°C to X°F"



const fahrToCel = () => {
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`

}

const celToFar = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
}

const conversion = () => {
    if (one.textContent !== '°C') {
        celToFar()
    } else {
        fahrToCel()
    }
}

const reset = () => {
    converter.value = ''
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)

convBtn.addEventListener('click', conversion)

resetBtn.addEventListener('click', reset)