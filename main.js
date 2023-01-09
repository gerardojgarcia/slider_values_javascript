///
//
//
// variables
const sliderEl = document.querySelector('#slider')
const sliderTwoEl = document.querySelector('#slider2')

const sliderTwoValue = document.querySelector('.slider-value2')
const sliderValue = document.querySelector('.slider-value')


const sliderThreeValue = document.querySelector('.slider-value3')
const sliderThreeEl = document.querySelector('#slider3')

const finalValue = document.querySelector('.final-value')
const submitValueEl = document.querySelector('.slider-submit')




//Slider Input Event Listener
sliderEl.addEventListener('input', function(){



    sliderValue.textContent = "$" + this.value

})


//Slider 2 Input Event Listener
sliderTwoEl.addEventListener('input', function(){



    sliderTwoValue.textContent = "$" +  this.value

})


//Slider 3 Input Event Listener
sliderThreeEl.addEventListener('input', function(){



    sliderThreeValue.textContent = "$" +  this.value

})


///Display Final Value


let finalValueNumber = ""



submitValueEl.addEventListener('click', ()=>{


    let finalValueOne = sliderValue.textContent
    let finalValueTwo = sliderTwoValue.textContent





    finalValueNumber = parseInt(sliderEl.value) + parseInt(sliderTwoEl.value) + parseInt(sliderThreeEl.value)





    finalValue.textContent = "$" + finalValueNumber
})






///Reset Button


const resetEl = document.querySelector('.reset')

resetEl.addEventListener('click', function(){
    window.location.reload()
})
