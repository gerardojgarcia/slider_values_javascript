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





    finalValue.value = "$" + finalValueNumber
})






///Reset Button


const resetEl = document.querySelector('.reset')

resetEl.addEventListener('click', function(){
    window.location.reload()
})




/// Quote Submit 


const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent the form from submitting

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch('http://localhost:3000/quotes', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
});




