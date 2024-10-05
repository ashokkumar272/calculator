const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');



buttons.forEach(button =>{
    button.addEventListener('click', function(){
        const value = button.getAttribute('data-value');
        handleInput(value);
    });
});


function handleInput(value){
    if(value === "="){
        calculateResult();
    }
    else if(value === "ac"){
        display.innerText = '';
    }
    else if(value === "<"){
        back();
    }
    else{
        updateDisplay(value)
    }

}

function updateDisplay(value){
    display.innerText += value;
}

function calculateResult() {
    try {
      display.innerText = eval(display.innerText);
    } catch (error) {
      display.innerText = "Error";
    }
  }

  function back(){
    display.innerText = display.innerText.slice(0, -1);
  }

  