const wzrost = document.querySelector('#Wzrost')
const waga = document.querySelector('#waga')
const form = document.querySelector('form')
const display = document.querySelector('#display')

form.addEventListener('submit',function(evt){
    evt.preventDefault()
    const bmi=(waga.value*100)/(wzrost.value*2)
    display.innerHTML += `Twój BMI: ${bmi}<br>`
})